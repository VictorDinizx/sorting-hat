function verificar(){
    var res = document.querySelector('div#res')
    var fdia = document.getElementsByName('radcasa')
    var fodeia = document.getElementsByName('radodeia')
    var fpet = document.getElementsByName('radpet')
    var fcor = document.getElementsByName('radcor')
    var flidar = document.getElementsByName('radlidar')
    var ffeel = document.getElementsByName('radfeel')
    var casa = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fdia[0].checked && fodeia[3].checked && fpet[2].checked && fcor[1].checked && flidar[0].checked && ffeel[0].checked) {
        casa = 'Grifinória'
        img.setAttribute('src', '/assets/img/grifinoria.png')
        res.innerHTML = `<strong>Parabéns, você é da casa ${casa}!!!</strong>`
        document.body.style.background = 'red'
    } else if (fdia[1].checked && fodeia[2].checked && fpet[3].checked && fcor[0].checked && flidar[3].checked && ffeel[3].checked) {
        casa = 'Sonserina'
        img.setAttribute('src', '/assets/img/sonserina.png')
        res.innerHTML = `<strong>Parabéns, você é da casa ${casa}!!!</strong>`
        document.body.style.background = 'green'
    } else if (fdia[0].checked && fodeia[1].checked && fpet[1].checked && fcor[2].checked && flidar[2].checked && ffeel[2].checked) {
        casa = 'Lufa-Lufa'
        img.setAttribute('src', '/assets/img/lufa-lufa.png')
        res.innerHTML = `<strong>Parabéns, você é da casa ${casa}!!!</strong>`
        document.body.style.background = 'yellow'
    } else if (fdia[1].checked && fodeia[0].checked && fpet[0].checked && fcor[3].checked && flidar[1].checked && ffeel[1].checked) {
        casa = 'Corvinal'
        img.setAttribute('src', '/assets/img/corvinal.png')
        res.innerHTML = `<strong>Parabéns, você é da casa ${casa}!!!</strong>`
        document.body.style.background = 'mediumblue'
    } else {
        res.innerHTML = `<strong>Infelizmente não encontramos uma casa pra você, tente novamente!</strong>`
        
    }
    res.style.textAlign = 'center'
    //res.innerHTML = `<strong>Parabéns, você é da casa ${casa}!!!</strong>`
    res.appendChild(img)
}
