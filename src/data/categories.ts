import geografiaImg from '../assets/images/geografia.png';
import cinemaImg from '../assets/images/pipoca.jpg';
import esportesImg from '../assets/images/esportes.png';
import diversosImg from '../assets/images/diversos.png';

interface ICategories {
    [key: string]: {
        title: string;
        color: string;
        image: string;
        questions: Array<{
            title: string;
            answers: Array<{
                label: string;
                correct: boolean;
            }>;
        }>;
    }
}

export default {
    esportes: {
        title: 'Esportes',
        color: '#71C27A',
        image: esportesImg,
        questions: [
            {
                title: 'O objetivo do jogo é comer todas as pastilhas do labirinto sem ser atingido pelos fantasmas. Que jogo é esse?',
                answers: [
                    {
                        label: 'Pacman',
                        correct: true,
                    },
                    {
                        label: 'Tacada',
                        correct: false
                    },
                    {
                        label: 'Polícia ladrão',
                        correct: false
                    }
                ]
            },
            {
                title: 'No vôlei, o que acontece quando a bola que um jogador tocou bate na rede e bate no chão no próprio campo?',
                answers: [
                    {
                        label: 'Anula o ponto',
                        correct: true,
                    },
                    {
                        label: 'Ponto pro adversário',
                        correct: true
                    },
                    {
                        label: 'Ponto pro time que atacou',
                        correct: false
                    }
                ]
            },
            {
                title: 'Qual prova do atletismo é a mais longa?',
                answers: [
                    {
                        label: 'Corridas de meio fundo',
                        correct: false,
                    },
                    {
                        label: 'Maratona',
                        correct: true
                    },
                    {
                        label: 'Revezamento',
                        correct: false
                    }
                ]
            }
        ],
    },
    cinema: {
        title: 'Cinema',
        color: '#D42028',
        image: cinemaImg,
        questions: [
            {
                title: 'No filme Os Vingadores - V, qual o nome do vilão do segundo filme?',
                answers: [
                    {
                        label: 'Malekith',
                        correct: false,
                    },
                    {
                        label: 'Ultron',
                        correct: true
                    },
                    {
                        label: 'Loki',
                        correct: false
                    }
                ]
            },
            {
                title: 'Qual herói não foi chamado inicialmente, mas apareceu no filme Os Vingadores - I?',
                answers: [
                    {
                        label: 'Thor',
                        correct: true,
                    },
                    {
                        label: 'Viúva Negra',
                        correct: false
                    },
                    {
                        label: 'Hulk',
                        correct: true
                    }
                ]
            }
        ]
    },
    geografia: {
        title: 'Geografia',
        color: '#1091C8',
        image: geografiaImg,
        questions: [
            {
                title: 'Qual é a capital da Alemanha?',
                answers: [
                    {
                        label: 'Amsterdã',
                        correct: true,
                    },
                    {
                        label: 'Berlim',
                        correct: false
                    },
                    {
                        label: 'Barcelona',
                        correct: true
                    }
                ]
            },
            {
                title: 'Qual é o meio de comunicação que influencia o fenómeno da cultura de massas e é conhecido por "a caixa do mundo"?',
                answers: [
                    {
                        label: 'televisão',
                        correct: true,
                    },
                    {
                        label: 'rádio',
                        correct: false
                    },
                    {
                        label: 'internet',
                        correct: false
                    }
                ]
            },
            {
                title: 'Qual dos seguintes países será mais beneficiado com a globalização?',
                answers: [
                    {
                        label: 'Equador',
                        correct: false,
                    },
                    {
                        label: 'Estados Unidos da América',
                        correct: true
                    },
                    {
                        label: 'Etiópia',
                        correct: false
                    }
                ]
            },
            {
                title: 'Qual é a capital da Espanha?',
                answers: [
                    {
                        label: 'Escópia',
                        correct: false,
                    },
                    {
                        label: 'Buenos Aires',
                        correct: false
                    },
                    {
                        label: 'Madrid',
                        correct: true
                    }
                ]
            }
        ]
    },
    diversos: {
        title: 'Diversos',
        color: '#301818',
        image: diversosImg,
        questions: [
            {
                title: 'Em Friends, Qual é o nome da filha da Ross e Rachel?',
                answers: [
                    {
                        label: 'Emily',
                        correct: false,
                    },
                    {
                        label: 'Amanda',
                        correct: false
                    },
                    {
                        label: 'Emma',
                        correct: true
                    }
                ]
            },
            {
                title: 'Quais os 4 álbuns principais lançados da banda Imagine Dragon',
                answers: [
                    {
                        label: 'Animalism, Wings, Heaven Down, Dangererous',
                        correct: false,
                    },
                    {
                        label: 'Night Visions, Smoke + Mirrors, Evolve, Origins',
                        correct: true
                    },
                    {
                        label: 'Ghost, Camels, Burn Soul, Always',
                        correct: false
                    }
                ]
            },
            {
                title: 'Qual destas opções não é uma linguagem de programação?',
                answers: [
                    {
                        label: 'Java',
                        correct: false,
                    },
                    {
                        label: 'Pascal',
                        correct: false
                    },
                    {
                        label: 'Kernal',
                        correct: true
                    }
                ]
            },
            {
                title: 'Poríferos alimentam-se de:',
                answers: [
                    {
                        label: 'Polem',
                        correct: false,
                    },
                    {
                        label: 'Microorganismos ',
                        correct: true
                    },
                    {
                        label: 'Organismos',
                        correct: false
                    }
                ]
            }
        ]
    }
} as ICategories