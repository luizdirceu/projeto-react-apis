import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  // Modal,
  // ModalBody,
  // ModalContent,
  // ModalOverlay,
  
}
  from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import logoPokemon from "../../assets/logoPokemon.png"
import arrowIcon from "../../assets/arrowIcon.svg"
import { goToPokedexPage, goToHomePage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'

const Header = (props) => {
  const { pokemonDetail } = props

  const context = useContext(GlobalContext)
  const { pokedex, addPokedex, removerPokedex, } = context

  const navigate = useNavigate()

  const location = useLocation()

  const { namePokemon } = useParams()


  function renderButton() {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonDetail.name
    )
    if (!isAlreadyOnPokedex) {
      return (<Button
        onClick={() => {
          addPokedex(pokemonDetail)
        }}
        colorScheme={'blue'}
        w="250px"
        h="74px"
        padding="4px 20px"
        fontFamily="'Poppins', sans-serif"
        fontWeight="400"
        fontSize='12px'
        cursor={'pointer'}
      >Adicionar a Pokédex</Button>
      )
    } else {
      return (<Button
        onClick={() => {
           removerPokedex(pokemonDetail)
        }}
        colorScheme={'red'}
        w="250px"
        h="74px"
        padding="4px 20px"
        fontFamily="'Poppins', sans-serif"
        fontWeight="400"
        fontSize='12px'
        cursor={'pointer'}
      >Excluir da Pokédex</Button>)
    }
  }


  return (
    <>
      <Grid
        w="100%" h={40}
        templateColumns='repeat(8, 1fr)'
        templateRows='repeat(3, 1fr)'
        alignItems='center'
        justifyItems='center'
      >
        {location.pathname === '/pokedex' &&
          <GridItem gridColumn={'1/3'} gridRow={'2/3'}>
            <Flex w='240px' >
              <Image src={arrowIcon} alt='Arrow Icon' />
              <Heading onClick={() => goToHomePage(navigate)}
                fontFamily="'Poppins', sans-serif"
                fontWeight="700"
                fontSize='24px'
                textDecoration='underline'
                cursor={'pointer'}
              >Todos Pokémons</Heading>
            </Flex>
          </GridItem>}

        {location.pathname === `/pokemon/detalhes/${namePokemon}` &&
          <GridItem gridColumn={'1/3'} gridRow={'2/3'}>
            <Flex w='240px' >
              <Image src={arrowIcon} alt='Arrow Icon' />
              <Heading onClick={() => goToHomePage(navigate)}
                fontFamily="'Poppins', sans-serif"
                fontWeight="700"
                fontSize='24px'
                textDecoration='underline'
                cursor={'pointer'}
              >Todos Pokémons</Heading>
            </Flex>
          </GridItem>}

        <GridItem gridColumn={'4 / 6'} gridRow={'2/3'}>
          <Image
            src={logoPokemon}
            alt="Logo Pokémon"
            w="307px"
            h="113px"
          />
        </GridItem>

        {location.pathname === '/' &&
          <GridItem gridColumn={'7 / 9'} gridRow={'2/3'}>
            <Button onClick={() => goToPokedexPage(navigate)}
              colorScheme={'blue'}
              w="250px"
              h="74px"
              padding="4px 20px"
              fontFamily="'Poppins', sans-serif"
              fontWeight="700"
              fontSize='24px'
              cursor={'pointer'}
            >Pokédex</Button>
          </GridItem>}

        {location.pathname === `/pokemon/detalhes/${namePokemon}` &&
          <GridItem gridColumn={'7 / 9'} gridRow={'2/3'}>
            {renderButton(pokemonDetail)}
          </GridItem>}
      </Grid>
    </>
  )
}

export default Header