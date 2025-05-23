import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, Text, VStack, HStack, useToast, Badge, Image as ChakraImage } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useWeb3 } from '../context/Web3Context';
import { FaCoins } from 'react-icons/fa';
import frijolitoImg from '../img/Logos/frijolito.png';
import elGallo from '../img/Cartas/EL_GALLO.jpg';
import elDiablo from '../img/Cartas/EL_DIABLO.jpg';
import laDama from '../img/Cartas/LA_DAMA.jpg';
import elBilletero from '../img/Cartas/EL_BILLETERO.jpg';
import elCriptocharro from '../img/Cartas/EL_CRIPTOCHARRO.jpg';
import laCybersirena from '../img/Cartas/LA_CYBERSIRENA.jpg';
import elHacker from '../img/Cartas/EL_HACKER.jpg';
import elSoldado from '../img/Cartas/EL_SOLDADO.jpg';
import laReina from '../img/Cartas/LA_REINA.jpg';

interface Card {
  id: number;
  name: string;
  image: string;
  isMarked: boolean;
}

interface Player {
  account: string;
  balance: number;
  tables: number[][];
}

const cartas = [
  { nombre: 'El Gallo', imagen: elGallo },
  { nombre: 'El Diablo', imagen: elDiablo },
  { nombre: 'La Dama', imagen: laDama },
  { nombre: 'El Catrín', imagen: undefined },
  { nombre: 'El Paraguas', imagen: undefined },
  { nombre: 'La Sirena', imagen: undefined },
  { nombre: 'La Escalera', imagen: undefined },
  { nombre: 'La Botella', imagen: undefined },
  { nombre: 'El Barril', imagen: undefined },
  { nombre: 'El Árbol', imagen: undefined },
  { nombre: 'El Melón', imagen: undefined },
  { nombre: 'El Valiente', imagen: undefined },
  { nombre: 'El Gorrito', imagen: undefined },
  { nombre: 'La Muerte', imagen: undefined },
  { nombre: 'La Pera', imagen: undefined },
  { nombre: 'La Bandera', imagen: undefined },
  { nombre: 'El Bandolón', imagen: undefined },
  { nombre: 'El Violoncello', imagen: undefined },
  { nombre: 'La Garza', imagen: undefined },
  { nombre: 'El Pájaro', imagen: undefined },
  { nombre: 'La Mano', imagen: undefined },
  { nombre: 'La Bota', imagen: undefined },
  { nombre: 'La Luna', imagen: undefined },
  { nombre: 'El Cotorro', imagen: undefined },
  { nombre: 'El Borracho', imagen: undefined },
  { nombre: 'El Negrito', imagen: undefined },
  { nombre: 'El Corazón', imagen: undefined },
  { nombre: 'La Sandía', imagen: undefined },
  { nombre: 'El Tambor', imagen: undefined },
  { nombre: 'El Camarón', imagen: undefined },
  { nombre: 'Las Jaras', imagen: undefined },
  { nombre: 'El Músico', imagen: undefined },
  { nombre: 'La Araña', imagen: undefined },
  { nombre: 'El Soldado', imagen: elSoldado },
  { nombre: 'La Estrella', imagen: undefined },
  { nombre: 'El Cazo', imagen: undefined },
  { nombre: 'El Mundo', imagen: undefined },
  { nombre: 'El Apache', imagen: undefined },
  { nombre: 'El Nopal', imagen: undefined },
  { nombre: 'El Alacrán', imagen: undefined },
  { nombre: 'La Rosa', imagen: undefined },
  { nombre: 'La Calavera', imagen: undefined },
  { nombre: 'La Campana', imagen: undefined },
  { nombre: 'El Cantarito', imagen: undefined },
  { nombre: 'El Venado', imagen: undefined },
  { nombre: 'El Sol', imagen: undefined },
  { nombre: 'La Corona', imagen: undefined },
  { nombre: 'La Chalupa', imagen: undefined },
  { nombre: 'El Pino', imagen: undefined },
  { nombre: 'El Pescado', imagen: undefined },
  { nombre: 'La Palma', imagen: undefined },
  { nombre: 'La Maceta', imagen: undefined },
  { nombre: 'El Arpa', imagen: undefined },
  { nombre: 'La Rana', imagen: undefined },
  { nombre: 'El Billetero', imagen: elBilletero },
  { nombre: 'El Criptocharro', imagen: elCriptocharro },
  { nombre: 'La Cybersirena', imagen: laCybersirena },
  { nombre: 'El Hacker', imagen: elHacker },
  { nombre: 'La Reina', imagen: laReina },
];

const borderAnim = keyframes`
  0% { box-shadow: 0 0 0 0 #FFD700; }
  50% { box-shadow: 0 0 24px 8px #FFD700; }
  100% { box-shadow: 0 0 0 0 #FFD700; }
`;

const LoteriaGame: React.FC = () => {
  const { account, connectWallet, frijolitos } = useWeb3();
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'finished'>('waiting');
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [player, setPlayer] = useState<Player | null>(null);
  const [tables, setTables] = useState<number[][]>([]);
  const toast = useToast();

  // Inicializar el juego
  const startGame = () => {
    if (!account) {
      toast({
        title: "Error",
        description: "Debes conectar tu wallet primero",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (frijolitos < 10) {
      toast({
        title: "Error",
        description: "No tienes suficientes frijolitos para comprar una tabla",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setGameState('playing');
    // Aquí se inicializaría la tabla del jugador
  };

  // Marcar carta en la tabla
  const markCard = (cardId: number) => {
    if (gameState !== 'playing') return;
    // Aquí se implementaría la lógica para marcar la carta
  };

  return (
    <Box p={4} bgGradient="linear(to-br, fondo.100, brand.100, fondo.200)" borderRadius="2xl" boxShadow="2xl">
      <VStack spacing={8}>
        {/* Estado de la cuenta y saldo */}
        <HStack spacing={4} w="full" justify="space-between">
          {!account ? (
            <Button onClick={connectWallet} colorScheme="yellow" leftIcon={<FaCoins />} fontWeight="bold">
              Conectar Wallet
            </Button>
          ) : (
            <Text fontWeight="bold" color="brand.900">Cuenta: {account}</Text>
          )}
          <Badge colorScheme="yellow" fontSize="1.1em" px={4} py={2} borderRadius="full" boxShadow="md">
            <HStack><img src={frijolitoImg} alt="frijolito" style={{width: 24, height: 24}} /> <span>{frijolitos} Frijolitos</span></HStack>
          </Badge>
        </HStack>

        {/* Tablero de juego */}
        {gameState === 'waiting' && (
          <Button onClick={startGame} colorScheme="purple" size="lg" borderRadius="full" fontWeight="bold" boxShadow="lg">
            Iniciar Juego (10 Frijolitos)
          </Button>
        )}

        {gameState === 'playing' && (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {cartas.map((carta, idx) => (
              <Box
                key={carta.nombre}
                bgGradient="linear(to-br, brand.50, brand.200, fondo.200)"
                borderRadius="2xl"
                border="4px solid #FFD700"
                boxShadow="xl"
                p={2}
                textAlign="center"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.08)', boxShadow: '2xl', animation: `${borderAnim} 1s infinite` }}
              >
                {carta.imagen ? (
                  <ChakraImage src={carta.imagen} alt={carta.nombre} borderRadius="md" boxShadow="md" mx="auto" maxH="120px" />
                ) : (
                  <Box bg="gray.200" borderRadius="md" h="120px" display="flex" alignItems="center" justifyContent="center" color="gray.500" fontWeight="bold">
                    Próximamente
                  </Box>
                )}
                <Text mt={2} fontWeight="bold" color="brand.500" fontFamily="heading" fontSize="lg">
                  {carta.nombre}
                </Text>
              </Box>
            ))}
          </Grid>
        )}

        {/* Carta actual */}
        {currentCard && (
          <Box borderWidth="4px" borderColor="brand.600" borderRadius="2xl" p={4} bg="white" boxShadow="2xl">
            <Text fontSize="2xl" fontWeight="bold" color="brand.900" fontFamily="heading">{currentCard.name}</Text>
            <ChakraImage 
              src={currentCard.image} 
              alt={currentCard.name}
              borderRadius="lg"
              boxShadow="lg"
              my={4}
              maxH="200px"
              mx="auto"
            />
          </Box>
        )}

        {/* Controles del juego */}
        {gameState === 'playing' && (
          <HStack spacing={4}>
            <Button onClick={() => markCard(0)} colorScheme="yellow" borderRadius="full" fontWeight="bold">
              Marcar Carta
            </Button>
            <Button onClick={() => setGameState('finished')} colorScheme="red" borderRadius="full" fontWeight="bold">
              Terminar Juego
            </Button>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default LoteriaGame; 