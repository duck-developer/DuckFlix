// IMAGES
import intocaveis from '@/assets/movies/intocaveis.png'
import clube from '@/assets/movies/clube.jpg'
import beekeeper from '@/assets/movies/beekeeper.jpg'
import antes_de_voce from '@/assets/movies/antes de voce.jpg'
import iluminado from '@/assets/movies/iluminado.jpg'
import titanic from '@/assets/movies/titanic.jpg'
import ultimo_homem from '@/assets/movies/ate_o_ultimo_homem.jpg'
import mentiroso from '@/assets/movies/mentiroso.jpg'
import totoro from '@/assets/movies/totoro.jpg'
import anel from '@/assets/movies/anel.jpg'
import ultimato from '@/assets/movies/ultimato.jpg'
import legend from '@/assets/movies/legend.jpg'
import memoria from '@/assets/movies/memoria.jpg'
import avt1 from '@/assets/movies/avt1.jpg'
import avt2 from '@/assets/movies/avt2.jpg'
import bee from '@/assets/movies/bee.jpg'
import v from '@/assets/movies/v.webp'
import duna from '@/assets/movies/duna.webp'





import { MovieType } from '@/interfaces/types/types_movie'
export class MovieCollection {
    Intocaveis={
        id:0,
        title: "Intocáveis",
        description: "Um milionário tetraplégico contrata um homem da periferia para ser o seu acompanhante, apesar de sua aparente falta de preparo. No entanto, a relação que antes era profissional cresce e vira uma amizade que mudará a vida dos dois.",
        link:"https://f005.backblazeb2.com/file/finact/Filmes/Intoc%C3%A1veis%20%282011%29.mp4",
        image: intocaveis 
    }
    Como_eu_era_antes_de_voce={
        id:1,
        title: "Como Eu Era Antes de Você",
        description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
        link:"https://sempra.pro/a1/out/old/6/498/498_45870889como-eu-era-antes-de-voce-2016.m3u8?a=1",
        image: antes_de_voce 
    }
    Titanic={
        id:2,
        title: "Titanic",
        description: "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.",
        link:"https://sempra.pro/a1/out/old/6/1215/1215_45899804titanic-1997.m3u8?a=1",
        image: titanic 
    }
    Ate_o_ultimo_homem={
        id:3,
        title: "Até o Último Homem",
        description: "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.",
        link:"https://sempra.pro/a1/out/old/6/491/491_85447436ate-o-ultimo-homem-2017.m3u8?a=1",
        image: ultimo_homem 
    }
    Meu_Amigo_Totoro : MovieType = {
        id:4,
        title: "Meu Amigo Totoro",
        description: "As irmãs Satsuki e Mei se mudam para o campo para ficar mais perto do hospital onde sua mãe está internada. Lá conhecem os Totoros, adoráveis criaturas místicas e alegres, que só podem ser vistas pelas crianças. Com eles, as duas irmãs viverão mágicas aventuras no campo.",
        link:"https://lightspeedst.net/s3/mp4/tonari-no-totoro-dublado/sd/1.mp4",
        image: totoro 
    }
    Senhor_dos_aneis : MovieType = {
        id:5,
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        description: "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.",
        link:"https://sempra.pro/a1/out/old/6/413/413_848518o-senhor-dos-aneis-a-sociedade-do-anel.m3u8?a=1",
        image: anel 
    }
    Vingadores_Ultimato : MovieType = {
        id:6,
        title: "Vingadores: Ultimato",
        description: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
        link:"https://sempra.pro/a1/out/old/6/1321/1321_69084014vingadores-ultimato.m3u8?a=1",
        image: ultimato 
    } 
    Eu_sou_a_lenda : MovieType = {
        id:7,
        title: "Eu Sou a Lenda",
        description: "Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue. Andando pela cidade de Nova York, ele procura por outros possíveis sobreviventes e tenta achar a cura da praga usando seu próprio sangue, que é imune.",
        link:"https://sempra.pro/a1/out/old/6/836/836_441219899eu-sou-a-lenda.m3u8?a=1",
        image: legend 
    } 
    Doador_de_memoria : MovieType = {
        id:8,
        title: "O Doador de Memórias",
        description: "Jonas vive em uma pequena comunidade aparentemente ideal, sem doenças ou guerras e onde todo mundo é feliz. Para que essa realidade subsista, um homem é encarregado de armazenar as más memórias, poupando os demais habitantes do sofrimento. Jonas, porém, descobre o perigoso segredo de sua comunidade e, armado com o poder do conhecimento, tenta fugir do mundo em que vive e proteger os que ama.",
        link: "https://vod3.cf.dmcdn.net/sec2(KMDuPeIBfahPfuQopEmmQ0DTKijNRbRrFrqIrfQKN7kU6lQzSIQ4tByKaHb1dVEg4fpPPsKkAHh4f8ZjmDWXzbxMF6asRRKIUG-MnjKg8h01Hg25aZg3YRjBKyYnqVG6pll5kcWQf5uUjnI20dmZiAhBJH534Glbza_DYU-cc28)/video/113/861/503168311_mp4_h264_aac_hq.m3u8",
        image: memoria 
    } 

    Bee_movie : MovieType = {
        id:9,
        title: "Bee Movie - A História de uma Abelha",
        description: "A recém-formada abelha Barry acha a vida de trabalhar com mel desinteressante. Ele voa fora da colmeia pela primeira vez e conversa com um humano, quebrando uma primordial regra de sua espécie. Barry descobre que humanos têm roubado e comido mel há séculos e decide processar a humanidade.",
        link:"https://sempra.pro/a1/out/old/6/777/777_9230821bee-a-historia-de-uma-abelha.m3u8?a=1",
        image: bee 
    } 
    V_de_Vinganca : MovieType = {
        id:10,
        title: "V de Vingança",
        description: "Após uma guerra mundial, a Inglaterra é ocupada por um governo fascista e vive sob um regime totalitário. Na luta pela liberdade, um vigilante, conhecido apenas como V, utiliza-se de táticas terroristas para enfrentar os opressores da sociedade. V salva uma jovem chamada Evey da polícia secreta e encontra nela uma nova aliada em busca de liberdade e justiça para o seu país.",
        link:"https://1a-1791.com/video/s8/2/Z/O/6/E/ZO6Ev.caa.mp4?u=0&b=0",
        image: v 
    } 
    Avatar1 : MovieType = {
        id:11,
        title: "Avatar",
        description: "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Na'vi. Esta paixão leva Jake a lutar pela sobrevivência de Pandora.",
        link:"https://sempra.pro/a1/out/old/6/847/847_197718571avatar-2009.m3u8?a=1",
        image: avt1 
    } 
    Avatar2 : MovieType = {
        id:12,
        title: "Avatar: O Caminho da Água",
        description: "Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.",
        link:"https://sempra.pro/a1/out/6/5597/5597_comando.to-avatar-o-caminho-da-agua-2023-1080p-web-dl-dual-7.1.m3u8?a=1",
        image: avt2
    } 
     O_primeiro_Mentiroso : MovieType = {
        id:13,
        title: "O primeiro Mentiroso",
        description: "Um roteirista de cinema não muito bem-sucedido e que vive em um mundo onde a mentira é completamente desconhecida, desenvolve a habilidade de mentir e começa a usar a nova arma em benefício próprio.",
        link:"https://1a-1791.com/video/s8/2/C/l/-/A/Cl-Ah.caa.mp4?u=3&b=0",
        image: mentiroso 
    }
    O_iluminado : MovieType = {
        id:14,
        title: "O Iluminado",
        description: "Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny se tornam mais perturbadoras. O escritor descobre os segredos sombrios do hotel e começa a se transformar em um maníaco homicida, aterrorizando sua família.",
        link:"https://sempra.pro/a1/out/6/7513/7513_o-iluminado-versao-do-diretor-1980-bluray-1080p-dual.m3u8?a=1",
        image: iluminado 
    }
    
    Beekeeper : MovieType = {
        id:15,
        title: "Beekeeper - Rede de Vingança",
        description: "As ações brutais de vingança de um homem assume riscos de proporções nacionais quando é revelado que ele é um ex-agente de uma organização poderosa e clandestina.",
        link:"https://cdnst66.tokyvideo.com/videos/525/525420/mp4/f66d3d1dfec493d22fa690ac6ff8276f702d7ae78f27a97ae1b85444a1f227f4.mp4?secure=r23sOrtiXjzEmUzxOLt4nA%3D%3D%2C1733960219",
        image: beekeeper 
    }
    Clube_da_luta: MovieType = {
        id:16,
        title: "Clube da luta",
        description: "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler",
        link:"https://sempra.pro/a1/out/old/6/461/461_474416495clube-da-luta-1999.m3u8?a=1",
        image: clube
    }
    Duna: MovieType = {
        id:17,
        title: "Duna",
        description: "Paul Atreides é um jovem brilhante, dono de um destino além de sua compreensão. Ele deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo.",
        link:"https://sempra.pro/a1/out/6/7226/7226_duna-2021-1080p-web-dl-mp4-dual.m3u8?a=1",
        image: duna
    }
    toArray() {
        return Object.values(this);
      }
}
