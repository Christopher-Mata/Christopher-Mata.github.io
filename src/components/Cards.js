import React from 'react';
import botimage from '../assets/botimage.png'
import websiteimage from '../assets/websiteimage.png'
import githubimage from '../assets/github.png'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={botimage} 
              text='Click here to invite the bot to a discord server you own/moderate!'
              label='Coatlicue: Discord Bot'
              path='https://discord.com/api/oauth2/authorize?client_id=1028285260951195668&permissions=8&scope=bot'
            />
            <CardItem
              src={websiteimage}
              text='The website I built to house my bot, currently offline due to a site wide redesign
                    click to view image of the project'
              label='Coatlicue: Website'
              path='https://cdn.discordapp.com/attachments/1055164179700527154/1055164238374641695/Screenshot_2022-12-21_at_10.44.58_AM.png'
            />
            <CardItem
              src={githubimage}
              text='The website you are viewing is built by me! Click here to get redirected to the GitHub Repo'
              label='Personal Website'
              path='https://github.com/Christopher-Mata/Personal-Website'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
