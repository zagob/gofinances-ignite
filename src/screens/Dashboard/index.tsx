import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "dev",
      amount: "R$ 12.000,00",
      category: {
        name: 'vendas',
        icon: 'dollar-sign'
      },
      date: "13/05/2020",
    },
    {
      id: '2',
      type: 'negative',
      title: "Capuccino",
      amount: "R$ 12.000,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: "13/05/2020",
    }
  ]
  return (
    <Container>
      <Header>
       <UserWrapper>
        <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/30050630?v=4' }} 
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Matheus</UserName>
            </User>
          </UserInfo>
        <LogoutButton onPress={() => {}}>
          <Icon name="power" />
        </LogoutButton>
       </UserWrapper>

      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Ultima entrada dia 13 de abrirl" 
        />
        <HighlightCard
          type="down"
          title="Saidas" 
          amount="R$ 17.400,00" 
          lastTransaction="Ultima entrada dia 13 de abrirl" 
        />
        <HighlightCard
          type="total"
          title="total" 
          amount="R$ 17.400,00" 
          lastTransaction="Ultima entrada dia 13 de abrirl" 
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </Transactions>
    </Container>
  )
}