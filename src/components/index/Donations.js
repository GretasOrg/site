import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HighlightedText from '../shared/HighlightedText';
import PaperEffect from '../shared/PaperEffect';
import Donation from './Donation';

export const donationImage = graphql`
  fragment donationImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 401
        height: 168
        placeholder: BLURRED
        layout: FULL_WIDTH
      )
    }
  }
`;

export default function Donations({ id }) {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "images/donations/doe-quanto-quiser.jpg" }
      ) {
        ...donationImage
      }
      image2: file(relativePath: { eq: "images/donations/acao-de-saude.jpg" }) {
        ...donationImage
      }
      image3: file(
        relativePath: { eq: "images/donations/vale-alimentacao.jpg" }
      ) {
        ...donationImage
      }
      image4: file(
        relativePath: { eq: "images/donations/educacao-para-saude.jpg" }
      ) {
        ...donationImage
      }
      image5: file(
        relativePath: { eq: "images/donations/tratamento-de-verminoses.jpg" }
      ) {
        ...donationImage
      }
      image6: file(relativePath: { eq: "images/donations/kit-higiene.jpg" }) {
        ...donationImage
      }
    }
  `);
  const img1 = getImage(data.image1);
  const img2 = getImage(data.image2);
  const img3 = getImage(data.image3);
  const img4 = getImage(data.image4);
  const img5 = getImage(data.image5);
  const img6 = getImage(data.image6);

  return (
    <section className="c-donations" id={id}>
      <HighlightedText className="c-donations__title" color="faded-dark">
        Nossas Ações
      </HighlightedText>
      <StaticImage
        className="c-donations__bgLeft"
        src="../../images/effects/bg-verde.png"
        alt="Senhor sertanejo apoiado numa vassoura"
        loading="lazy"
        placeholder="blurred"
        layout="fullWidth"
        objectFit="contain"
        style={{ position: 'absolute' }}
      />
      <StaticImage
        className="c-donations__bgRight"
        src="../../images/effects/bg-amarelo.png"
        alt="Menina sertaneja sorridente debruçada numa janela"
        loading="lazy"
        placeholder="blurred"
        layout="fullWidth"
        objectFit="contain"
        style={{ position: 'absolute' }}
      />
      <div className="l-donations__listWrapper">
        <ul className="l-donations__list">
          <li>
            <Donation
              plan="9"
              price={0.0}
              title="Doe o quanto quiser!"
              description="Sua contribuição auxilia o Gretas a levar benefícios de
          alimentação e cuidados básicos, acesso à saúde e educação para a
          população de Ibimirim."
              auxText="Toda valor doado será direcionado para a Ação Ibimirim que
          acontecerá em Janeiro de 2021."
              image={img1}
              imageAlt="Árvore seca numa região semi-árida ao lado de uma consulta médica com uma paciente"
            />
          </li>
          <li>
            <Donation
              plan="2"
              price={100}
              title="Ação de Saúde"
              description="Leve a oportunidade de uma consulta médica a uma família do
            Sertão."
              auxText="Consulta por família em uma destas especialidades médicas:
            ginecologista, cardiologista, dermatologista, dentista, clínico
            geral, médico da família ou pediatra."
              image={img2}
              imageAlt="Casa simples numa região semi-árida ao lado de um bebê recebendo uma consulta médica"
              readonly={true}
            />
          </li>
          <li>
            <Donation
              plan="3"
              price={80}
              title="Vale Alimentação"
              description="Todo ser humano precisa de alimento. Compre o Vale e fortaleça
            uma família em estado de vulnerabilidade."
              auxText="Com este valor uma família pode levar para casa: feijão, arroz,
            macarrão, farinha, açúcar, óleo, vinagre, leite em pó, extrato
            de tomate, fubá, café, doce de goiabada, tempero, sal, bolacha
            doce/salgada, verduras e ovos."
              image={img3}
              imageAlt="Pessoa guiando um carrinho de compras num supermercado ao lado de um conjunto de frutas e verduras diversas"
              readonly={true}
            />
          </li>
          <li>
            <Donation
              plan="4"
              price={50}
              title="Educação para Saúde"
              description="A pandemia atinge o mundo todo, mas a educação é limitada.
            Incentive a divulgação sobre cuidados básicos de doenças comuns
            na região e como combatê-las."
              auxText="Itens: vídeos educativos e programas de rádio por 2 meses em
            toda região."
              image={img4}
              imageAlt="Sala de aula com uma professora e alguns alunos ao lado de um profissional de saúda ajeitando suas luvas"
              readonly={true}
            />
          </li>
          <li>
            <Donation
              titleSmall={true}
              plan="5"
              price={24}
              title="Tratamento de Verminoses"
              description="A falta de saneamento básico provoca o surgimento de doenças de
            verminoses. Contribua com nossa ação de tratamento de
            verminoses!"
              auxText="Itens: Remédio (R$4,00) X família (6 pessoas)."
              image={img5}
              imageAlt="Criança recebendo tratamento dental de um voluntário ao lado de cartelos de comprimidos"
              readonly={true}
            />
          </li>
          <li>
            <Donation
              plan="6"
              price={10}
              title="Kit Higiene"
              description="Invista nos cuidados básicos da higiene pessoal e do combate ao
            novo coronavírus."
              auxText="Itens: papel higiênico, sabonete, água sanitária, sabão em
            barra, creme dental, escova de dente, cloro, máscara e álcool
            líquido."
              image={img6}
              imageAlt="Pessoa usando álcool gel nas mãos ao lado de uma cesta com itens diversos para higiene pessoal"
              readonly={true}
            />
          </li>
        </ul>
      </div>
      <a
        className="c-button c-button-danger c-donations__action"
        href="https://instagram.com/gretas_org"
      >
        Todas as ações
      </a>
      <PaperEffect className="c-donations__bottom" />
    </section>
  );
}
