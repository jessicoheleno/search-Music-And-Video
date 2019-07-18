const readline = require('readline-sync')
const opn = require('opn')

function MusicAndVideo(){
    const options = ['Spotify', 'YouTube','YouTube Music', 'SoundCloud'] 
    const SelectOption = readline.keyInSelect(options, 'chose one option: ')
    const SelectOptionText = options[SelectOption]
    const search = readline.question('waht name of the song or video: ')

    if(SelectOptionText == 'Spotify'){
        opn('https://open.spotfy.com/search/results/'+search)
    }else if(SelectOptionText == 'YouTube'){
        opn('https://www.Youtube.com/results?search_query='+search)
    }else if (SelectOptionText == 'SoundCloud'){
    opn('https://soundcloud.com/search?q='+search)    
    }else if (SelectOptionText == 'YouTube Music'){
        opn('https://music.youtube.com/search?q='+search)
    }
    else{
        console.log('error')
    }
}
MusicAndVideo()