import {Container, Links, Content} from './styles';

import {Tag} from '../../components/Tag';

import {Header} from '../../components/Header';

import {Button} from '../../components/Button';
import {ButtonText} from '../../components/ButtonText';

import {Section} from '../../components/Section';


export function Details() {
  return(
      <Container>
        <Header />

        <main>
          <Content>
            
            <ButtonText title="Excluir nota" />

            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi maiores hic minus eius incidunt corporis cumque ipsum quaerat. Nobis ab consectetur perspiciatis minus qui obcaecati natus maxime quia ad porro reprehenderit cumque doloremque dolore, perferendis, non itaque voluptatum placeat nostrum illo repellendus optio pariatur blanditiis. Obcaecati commodi harum nesciunt?
            </p>

            <Section title="Links úteis">
              <Links>
                <li><a href="#">https://www.linkedin.com/in/marcos-roncaglia/</a></li>
                <li><a href="#">https://www.linkedin.com/in/marcos-roncaglia/</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="nodejs" />
            </Section>
        
            <Button title="Entrar" loading/>
            
          </Content>
        </main>
      </Container>
  )
} 