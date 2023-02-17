import {
  Button,
  Flex,
  HStack,
  Image,
  // Modal,
  // ModalBody,
  // ModalContent,
  // ModalOverlay,
  Text,
  useDisclosure,
  VStack
}
  from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import pokeball from '../../assets/pngwing2.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToPokemonDetailPage } from '../../routes/coordinator'
import { getTypes } from '../../utils/RetornaPokemonType'
import { getColors } from '../../utils/RetornarCardColor'


const PokemonCard = (props) => {
  const {
    pokemon,
    pokemonName,
    addPokedex,
    removerPokedex,
  } = props



  const [pokemonCards, setPokemonCards] = useState([])

  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    getPokemonCards()
  }, [])

  const getPokemonCards = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      setPokemonCards(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      
      {(location.pathname === '/' || location.pathname === '/pokedex') &&
        <Flex
          w='420px'
          h='210px'
          flexDirection='column'
          borderRadius='20px'
          position='relative'
          bg={pokemonCards?.types?.map((type) => {
            if (type.slot === 1) {
              return getColors(type.type.name)
            }
          })}
        >
          <Flex
            h='160px'
            justifyContent='space-between'>
            <VStack
              w='200px'
              alignItems='start'
              padding='16px'
            >
              <Text
                color='white'
                fontSize='16px'
                fontFamily="Inter, sans serif"
                fontWeight='700'
              >{pokemonCards?.id <= 9 ? <Text>#0{pokemonCards?.id}</Text> : <Text>#{pokemonCards?.id}</Text>}
              </Text>
              <Text
                fontFamily="Inter, sans serif"
                fontSize='32px'
                fontWeight='700'
                color='white'>
                {pokemonName}
              </Text>
              <HStack>
                {pokemonCards?.types?.map((type) => {
                  return <Image key={type} src={getTypes(type.type.name)} alt='tipo pokémon' />
                })
                }
              </HStack>
            </VStack>
            <VStack
              w='200px'
              alignItems='center'
              justifyContent='center'
              padding='16px'
            >
              <Image
                src={pokemonCards.sprites?.other['official-artwork'].front_default}
                alt='Imagem Pokemon'
                w='200px'
                h='200px'
                position='absolute'
                zIndex={1}
                marginBottom="50px"
              />
              <Image
                src={pokeball}
                alt='Imagem Pokebola'
                position='absolute'
                w='250px'
                padding='16px 28px 0px 0px '
              />

            </VStack>
          </Flex>
          <Flex
            w='420px'
            h='40px'
            justifyContent='space-between'
            alignItems='center'
            padding='0 24px'
          >
            <Text onClick={() => {
              goToPokemonDetailPage(navigate, pokemonCards.name)
            }}
              textDecoration='underline'
              fontFamily="'Poppins', sans-serif"
              fontWeight="700"
              fontSize='16px'
              color='white'
              cursor={'pointer'}
            >
              Detalhes
            </Text>

            {location.pathname === '/' &&
              <Button onClick={() => {
                addPokedex(pokemonCards)
              }}
                w='146px'
                h='38px'
                fontFamily="'Poppins', sans-serif"
                fontWeight="400"
                fontSize='16px'
                cursor={'pointer'}
              >Capturar!</Button>}

            {location.pathname === '/pokedex' &&
              <Button
                onClick={() => {
                  removerPokedex(pokemonCards)
                }}
                w='146px'
                h='38px'
                fontFamily="'Poppins', sans-serif"
                fontWeight="400"
                fontSize='16px'
                colorScheme='red'
                cursor={'pointer'}
              >Excluir </Button>}
          </Flex>
        </Flex>
      }

    </>
  )
}

export default PokemonCard
