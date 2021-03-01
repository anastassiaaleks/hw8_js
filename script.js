const html=document.querySelector('html')
html.setAttribute('lang', 'en')

const metaUTF=document.createElement('meta')
metaUTF.setAttribute('charset', 'UTF-8')
document.head.appendChild(metaUTF)

const metaHttp=document.createElement('meta')
metaHttp.setAttribute('http-equiv', 'X-UA-Compatible')
metaHttp.setAttribute('content', 'IE=edge')
document.head.appendChild(metaHttp)

const metaVie=document.createElement('meta')
metaVie.setAttribute('name', 'viewport')
metaVie.setAttribute('content', 'width=device-width, initial-scale=1.0')
document.head.appendChild(metaVie)

const metaAuthor=document.createElement('meta')
metaAuthor.setAttribute('name', 'author')
metaAuthor.setAttribute('content', 'Anastasia Aleksandrova')
document.head.appendChild(metaAuthor)

const linkFonts=document.createElement('link')
linkFonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans:wght@400&display=swap')
linkFonts.setAttribute('rel', 'stylesheet')
document.head.appendChild(linkFonts)

const titleDoc=document.createElement('title')
titleDoc.innerText='Choose your option'
document.head.appendChild(titleDoc)

document.body.style.margin='0'
const container=document.createElement('section')
container.style.textAlign='center'
container.style.maxWidth='800px'
container.style.margin='0 auto'
container.style.marginTop='80px'
const headerContainer = document.createElement('section')
headerContainer.style.marginBottom='55px'

const mainContainer=document.createElement('section')
mainContainer.style.display='grid'
mainContainer.style.gridTemplateColumns='400px 400px'

const itemF=document.createElement('div')
itemF.style.border='1px solid #E8E9ED'

const itemS=document.createElement('div')
itemS.style.backgroundColor='#8F75BE'

const HeaderText=document.createElement('h1')
HeaderText.innerHTML='Choose Your Option'
HeaderText.style.fontFamily='Arvo'
HeaderText.style.fontWeight='normal'
HeaderText.style.fontSize='36px'
HeaderText.style.lineHeight='10px'
HeaderText.style.color='#212121'

const HeaderSubtext=document.createElement('p')
HeaderSubtext.innerHTML='But I must explain to you how all this mistaken idea of denouncing '
HeaderSubtext.style.fontFamily='Open Sans'
HeaderSubtext.style.fontStyle='normal'
HeaderSubtext.style.fontWeight='normal'
HeaderSubtext.style.fontSize='14px'
HeaderSubtext.style.color='#9FA3A7'

const itemPreTitleF=document.createElement('p')
itemPreTitleF.innerHTML=('Freelancer')
itemPreTitleF.style.fontFamily='Montserrat'
itemPreTitleF.style.fontStyle='normal'
itemPreTitleF.style.fontWeight='bold'
itemPreTitleF.style.fontSize='12px'
itemPreTitleF.style.lineHeight='15px'
itemPreTitleF.style.letterSpacing='2.4px'
itemPreTitleF.style.color='#9FA3A7'
itemPreTitleF.style.textTransform='uppercase'
itemPreTitleF.style.paddingTop='81px'

const itemTitleF=document.createElement('h1')
itemTitleF.innerHTML=('Initially designed to ')
itemTitleF.style.fontFamily='Arvo'
itemTitleF.style.fontWeight='normal'
itemTitleF.style.fontSize='36px'
itemTitleF.style.lineHeight='38px'
itemTitleF.style.color='#212121'
itemTitleF.style.maxWidth='210px'
itemTitleF.style.margin='0 auto'
itemTitleF.style.marginTop='19px'
itemTitleF.style.marginBottom='25px'

const itemTextF=document.createElement('p')
itemTextF.innerHTML=('But I must explain to you how all this mistaken idea of denouncing ')
itemTextF.style.fontFamily='Open Sans'
itemTextF.style.fontWeight='normal'
itemTextF.style.fontStyle='normal'
itemTextF.style.fontSize='12px'
itemTextF.style.lineHeight='22px'
itemTextF.style.color='#9FA3A7'
itemTextF.style.maxWidth='210px'
itemTextF.style.margin='0 auto'
itemTextF.style.marginBottom='64.5px'

const itemButtonF=document.createElement('button')
itemButtonF.innerHTML=('Start here')
itemButtonF.style.border ='3px solid #FFC80A'
itemButtonF.style.width ='147px'
itemButtonF.style.height ='46px'
itemButtonF.style.fontFamily='Montserrat'
itemButtonF.style.fontWeight='bold'
itemButtonF.style.fontStyle='normal'
itemButtonF.style.fontSize='12px'
itemButtonF.style.lineHeight='15px'
itemButtonF.style.color='#212121'
itemButtonF.style.letterSpacing='2.4px'
itemButtonF.style.textTransform='uppercase'
itemButtonF.style.backgroundColor='white'
itemButtonF.style.borderRadius='25px'
itemButtonF.style.marginBottom='85px'

const itemPreTitleS=document.createElement('p')
itemPreTitleS.innerHTML=('Studio')
itemPreTitleS.style.fontFamily='Montserrat'
itemPreTitleS.style.fontStyle='normal'
itemPreTitleS.style.fontWeight='bold'
itemPreTitleS.style.fontSize='12px'
itemPreTitleS.style.lineHeight='15px'
itemPreTitleS.style.letterSpacing='2.4px'
itemPreTitleS.style.color='#FFC80A'
itemPreTitleS.style.textTransform='uppercase'
itemPreTitleS.style.paddingTop='81px'

const itemTitleS=document.createElement('h1')
itemTitleS.innerHTML=('Initially designed to ')
itemTitleS.style.fontFamily='Arvo'
itemTitleS.style.fontWeight='normal'
itemTitleS.style.fontSize='36px'
itemTitleS.style.lineHeight='38px'
itemTitleS.style.color='#fff'
itemTitleS.style.maxWidth='210px'
itemTitleS.style.margin='0 auto'
itemTitleS.style.marginTop='19px'
itemTitleS.style.marginBottom='25px'

const itemTextS=document.createElement('p')
itemTextS.innerHTML=('But I must explain to you how all this mistaken idea of denouncing ')
itemTextS.style.fontFamily='Open Sans'
itemTextS.style.fontWeight='normal'
itemTextS.style.fontStyle='normal'
itemTextS.style.fontSize='12px'
itemTextS.style.lineHeight='22px'
itemTextS.style.color='#fff'
itemTextS.style.maxWidth='210px'
itemTextS.style.margin='0 auto'
itemTextS.style.marginBottom='64.5px'

const itemButtonS=document.createElement('button')
itemButtonS.innerHTML=('Start here')
itemButtonS.style.border ='3px solid #FFC80A'
itemButtonS.style.width ='147px'
itemButtonS.style.height ='46px'
itemButtonS.style.fontFamily='Montserrat'
itemButtonS.style.fontWeight='bold'
itemButtonS.style.fontStyle='normal'
itemButtonS.style.fontSize='12px'
itemButtonS.style.lineHeight='15px'
itemButtonS.style.color='#fff'
itemButtonS.style.letterSpacing='2.4px'
itemButtonS.style.textTransform='uppercase'
itemButtonS.style.backgroundColor='#8F75BE'
itemButtonS.style.borderRadius='25px'
itemButtonS.style.marginBottom='85px'

itemF.appendChild(itemPreTitleF)
itemF.appendChild(itemTitleF)
itemF.appendChild(itemTextF)
itemF.appendChild(itemButtonF)

itemS.appendChild(itemPreTitleS)
itemS.appendChild(itemTitleS)
itemS.appendChild(itemTextS)
itemS.appendChild(itemButtonS)

headerContainer.appendChild(HeaderText)
headerContainer.appendChild(HeaderSubtext)

mainContainer.appendChild(itemF)
mainContainer.appendChild(itemS)

container.appendChild(headerContainer)
container.appendChild(mainContainer)
document.body.appendChild(container)