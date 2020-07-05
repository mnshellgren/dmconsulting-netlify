import React from 'react'
import { Container} from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import book from './bokomslag.png';
import book2 from './bokoslag2.png';
import backgroundimg from './birds_v.jpg'
import swish_logo from './swish_logo_primary_cmyk.svg'

const BooksPage = ({ data }) => {
  return (
    <div>
        <div className="container-fluid heading-container">
          <Container>
            <img src={backgroundimg} alt="Åsa walking on the street" />
            <h1 className='display-4'>Books</h1>
          </Container>
        </div>
        <Container className="content-rich-page books">
          <h1>Future Boss</h1>
          <div className="row mt-4">
            <div className="col-xs-2   col-sm-4 col-md-4 mt-4 bookcover">
              <img className="col-xs-6 col-sm-9 col-md-9 " src={book2} alt="Bok - Future Boss"/>
            </div>
            <div className="col-xs-10 col-sm-8 col-md-8 mt-4 text">
              <p>The success of digital transformation is heavily dependent of the human
capability of managing change and the company’s effort in the
implementation of new tools, way of working, culture, and leadership.
The role of leaders that understand how to motivate and lead a digital
organization has become a vital success factor. </p><p>
In this book you will find eight straightforward leadership principles for
managing and empowering your team successfully in a digital
environment. To continue to stay relevant as a leader, you need to learn
about the emerging Artificial Intelligence (AI) and its impact on your
business, your team and your leadership. </p><p>
This book explains the basics of AI and provides straight-forward
guidance to leadership in times of AI. You will get insights about the
increased collaboration between humans and machines, the expected
changes in roles and functions, the impact of your decision making and
why ethics and leader’s responsibility is more important than ever. You
will also get quick guidance on how to start your preparations with your
team and how to identify AI opportunities in your business. The business
playing field will change dramatically in a few years’ time, and what is
better than being well prepared! </p><p>
The book includes important knowledge from well-known AI professors
and experts, who has shared their insights and outlook on AI and its
implications of leadership. <br></br>
              </p>
              <div className="row mt-5">
                <div className="col-xs-1 col-sm-2 col-md-2">
                  <img src={swish_logo} className="swish" alt="swish logotyp" />
                </div>
                <div className="col-xs-10 col-sm-9 col-md-9">
                  <h3 className="mt-2">Pris: 195 kr</h3>
                  <p className="mt-4">Swisha till <span className="font-italic">1235950449</span> och märk meddelandet med namn och adress så kommer boken med posten inom ett par dagar.
                  </p><p>If you don't have Swish, or want to order using another currency, please send an email to asa@degermark.nu.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </Container>
        <Container className="content-rich-page books">
          <h1>Uppgradera ditt ledarskap</h1>
          <div className="row mt-4">
            <div className="col-xs-2   col-sm-4 col-md-4 mt-4 bookcover">
              <img className="col-xs-6 col-sm-9 col-md-9 " src={book} alt="Bok - uppgradera ditt ledarskap"/>
            </div>
            <div className="col-xs-10 col-sm-8 col-md-8 mt-4 text">
              <p>I takt med att företag digitaliseras behöver även ledarskapet uppgraderas för att ledare ska lyckas i en digital
                miljö. Kravet på en modern chef är att ha förmåga att leda med stöd av riktning och en klar ambition. Det krävs också en
                mer möjlighetsutforskande syn på styrning och en anpassning till den höga utvecklingshastighet som den digitala tekniken
                skapar. Dessa ändrade förhållanden och ändrade synsätt får stor påverkan på hur ledare behöver agera på daglig basis.<br></br> I mängder med böcker,
                bloggar och rapporter poängteras att tydligt ledarskap och digital kompetens är nyckeln till framgång. Vad är då tydligt ledarskap och
                hur leder man i en digital värld? Det är precis det jag adresserar i den här boken – hur du uppgraderar ditt ledarskap och din förmåga
                att leda med nya förutsättningar. <br></br> I boken finns information om varför och hur ditt ledarskap kan utvecklas, bl.a. förändrade förhållningssätt,
                nya sätt att leda och organisera din verksamhet samt hur du kan möta kravet på en ökad kommunikativ förmåga. Jag adresserar också den viktiga
                förändringsresan och dess fallgropar, hur du får med dig alla ombord samt hur ni tillsammans kan utveckla företagets kultur för att stödja ert
                nya sätt att arbeta och agera. I slutet av boken finner du konkreta utvecklingsplaner, både för dig som ledare och för din ledningsgrupp. <br></br>I stort
                sett alla företag och organisationer befinner sig i någon form av digital transformation. Därför har jag skrivit den här boken för att kunna fungera
                i många olika typer av företag och på flera nivåer.<br></br> Jag hoppas att innehållet inte bara kan inspirera och hjälpa dig till en givande utveckling av
                ditt ledarskap, utan också påminna om hur viktigt det är med bra ledarskap, oavsett omvärldens svängningar.
              </p>
              <div className="row mt-5">
                <div className="col-xs-1 col-sm-2 col-md-2">
                  <img src={swish_logo} className="swish" alt="swish logotyp" />
                </div>
                <div className="col-xs-10 col-sm-9 col-md-9">
                  <h3 className="mt-2">Pris: 195 kr</h3>
                  <p className="mt-4">Swisha till <span className="font-italic">1235950449</span> och märk meddelandet med namn och adress så kommer boken med posten inom ett par dagar.</p>
                </div>
              </div>
            </div>
          </div>

        </Container>
    </div>
  )
}

export default BooksPage
