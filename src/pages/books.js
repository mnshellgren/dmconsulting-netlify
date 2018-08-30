import React from 'react'
import { Container} from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import book from './bokomslag.png'
import backgroundimg from './birds_v.jpg'
import swish_logo from './swish_logo_primary_cmyk.svg'

const BooksPage = ({ data }) => {
  return (
    <div>
        <div className="container-fluid heading-container">
          <Container>
            <img src={backgroundimg} alt="Åsa walking on the street" />
            <h1 className='display-4'>Böcker</h1>
          </Container>
        </div>
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
