import React from 'react'
import styled from 'styled-components'

import Button from '../../ui/Button'
import { colors } from '../../styles'
import logoSplash from '../../styles/images/splash-logo.svg'

import CardOption from '../../components/CardOption'

class Welcome extends React.Component {
  render() {
    if (this.props.selectCard) {
      return (
        <SelectCard>
          <Header>Выберите карту</Header>
          <LoginText>
            Выберите счет, на основе которого вы будете контроллировать расходы.
            Вы сможете поменять счет через настройки приложения в любое время.
          </LoginText>
          <CardOption name="Дебетовая карта" type="visa" />
          <CardOption name="Дебетовая карта" type="mir" />
        </SelectCard>
      )
    }

    return (
      <WelcomeLayout>
        <Column left>
          <Header>Войдите через аккаунт «Открытие»</Header>
          <LoginText>
            <p>
              Предоставьте доступ к своим данным, авторизуясь через приложение
              банка «Открытие».
            </p>
            <p>Мы не используем и не обрабатываем ваши персональные данные.</p>
          </LoginText>

          <Button>Подключить аккаунт</Button>
        </Column>

        <Column>
          <Logo src={logoSplash} />
        </Column>
      </WelcomeLayout>
    )
  }
}

const SelectCard = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 140px;
`

const Logo = styled.img`margin-left: 50px;`

const Column = styled.div`
  flex: 1 1;
  ${props =>
    props.left ? `border-right: 2px solid ${colors.grayLightest}` : ''};
  ${props => (props.left ? 'padding-right: 20px' : '')};
`

const LoginText = styled.div`
  color: ${colors.gray};
  font-size: 16px;
  margin-bottom: 35px;
`

const Header = styled.h3`
  size: 18px;
  font-weight: 500;
  color: ${colors.black};
`

const WelcomeLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  margin-top: 140px;
`

export default Welcome
