import { Head } from '~/components/Head';
import { InformationLayout } from '~/layouts/Information';
import { Container, ImageContainer } from '~/styles/pages/covid-about';

const CovidAbout = () => (
  <>
    <Head title="Covid Agora | Oque é, e como se previnir do Covid-19?" />

    <InformationLayout>
      <Container>
        <h1>O que é o Coronavírus (COVID-19) ?</h1>
        <ol>
          <li>
            <p>
              <a href="https://www.gov.br/saude/pt-br/coronavirus/o-que-e-o-coronavirus">
                Coronavírus
              </a>{' '}
              é uma família de vírus que causam infecções respiratórias. O novo
              agente do coronavírus foi descoberto em 31/12/19 após casos
              registrados na China. Provoca a doença chamada de coronavírus
              (COVID-19). Os primeiros coronavírus humanos foram isolados pela
              primeira vez em 1937. No entanto, foi em 1965 que o vírus foi
              descrito como coronavírus, em decorrência do perfil na
              microscopia, parecendo uma coroa. A maioria das pessoas se infecta
              com os coronavírus comuns ao longo da vida, sendo as crianças
              pequenas mais propensas a se infectarem com o tipo mais comum do
              vírus. Os coronavírus mais comuns que infectam humanos são o alpha
              coronavírus{' '}
              <a href="https://www.saude.sc.gov.br/coronavirus/doenca.html">
                229E
              </a>{' '}
              e NL63 e beta coronavírus OC43, HKU1.
            </p>
          </li>
          <li>
            <h2>Quais os sintomas ?</h2>
            <p>
              Os sintomas da COVID-19 podem variar de um simples resfriado até
              uma pneumonia severa. Sendo os sintomas mais comuns:
              <b> Tosse /</b> <b> Febre /</b>
              <b> Coriza /</b>
              <b> Dor de garganta /</b> e <b> Dificuldade para respirar.</b>
            </p>
          </li>
          <li>
            <h2>Como é transmitido ?</h2>
            <p>
              A transmissão acontece de uma pessoa doente para outra ou por
              contato próximo por meio de:
              <b> Toque do aperto de mão /</b> <b> Gotículas de saliva /</b>
              <b> Espirro /</b>
              <b>
                Objetos ou superfícies contaminadas, como celulares, mesas,
                maçanetas, brinquedos.
              </b>
            </p>
          </li>
          <li>
            <h2>Como previnir o contágio</h2>
          </li>
        </ol>
      </Container>

      <ImageContainer>
        <div>
          <img
            src="/static/images/aboutcovid/covid-alcool.png"
            alt="Covid Alcool"
          />
          <p>Use alcool em gel</p>
        </div>

        <div>
          <img src="/static/images/aboutcovid/crowd.png" alt="crowd" />
          <p>Evite aglomerações</p>
        </div>

        <div>
          <img src="/static/images/aboutcovid/mascara.png" alt="Mascara" />
          <p>Use Máscara</p>
        </div>

        <div>
          <img src="/static/images/aboutcovid/window.png" alt="Janela" />
          <p>Deixe o ambiente arejado.</p>
        </div>
      </ImageContainer>
    </InformationLayout>
  </>
);

export default CovidAbout;
