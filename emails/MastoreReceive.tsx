import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailInfo {
    nom: string;
    email: string;
    subject: string;
    message: string;
    
}


export const MastoreEmail: React.FC<EmailInfo> = ({ nom, email, subject, message }) => {
  return (
    <Html>
      <Head />
      <Preview>Mastore</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Text className="text-center text-bold text-2xl text-sky-950 mb-45">
            MASTORE
          </Text>
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              Demande de contact
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                Cher équipe Mastore,
                <br />
                {""}
                <br />
                Nous avons reçu une nouvelle demande de contact depuis notre site web. 
                <br />
                {""}
                <br />
                Voici les détails de la requête :

                </Text>
              </Row>
            </Section>


            <Section className="text-base">
              <strong>Nom de l'expéditeur :</strong>
              <p>{nom}</p>
              <br />
              <strong>Email de l'expéditeur :</strong>
                <p>{email}</p>
                
                <br />
                <strong>Objet de la demande :</strong>
                <p>{subject}</p>
                <br />
                <strong>Message :</strong>
                <br />
                <p>{message}</p>
                <br />
            </Section>

            <Section className="text-base py-20">
                Veuillez traiter cette demande dès que possible.
                <br />
                {""}
                <br />
                Merci !
            </Section>

          </Container>

          <Container className="mt-20">
            
            <Text className="text-center text-gray-400 mb-45">
              Mastore, 1 Rue du Colonel Chambonnet - 69 500 Bron
              <br />
              Mastore Ouest, 12 Rue Copernic - 17 440 Aytré
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MastoreEmail;
