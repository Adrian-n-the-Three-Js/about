import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Carousel from './Carousel.jsx';

describe ('Carousel', () => {

  // let CarouselComponent;
  // beforeEach( () => {
  //   CarouselComponent = shallow(<Carousel data={[{id: 1, user: 'name'}, {id: 2, user: test}]} />);
  // });
    // CarouselComponent = shallow(<Carousel data={
    //   [{"_id": "1",
    //     "roomAlbum": ["_id":"001","user":"George","userAvatarURL":"www.google.com","caption":"Cat","category":"Room","datePosted":"2020-05-23T15:15:51-04:00","helpfulVotes":1}],

    //     "diningAlbum":[{"_id":"001","user":"Dan Gold","userAvatarURL":"www.google.com","caption":"Friends","category":"Dining","datePosted":"2016-06-26T18:09:09-04:00","helpfulVotes":6},{"_id":"002","user":"Zakaria Zayane","userAvatarURL":"www.google.com","caption":null,"category":"Dining","datePosted":"2019-02-23T19:22:42-05:00","helpfulVotes":6}],

    //     "poolAlbum":[{"_id":"001","user":"MILKOVÍ","userAvatarURL":"www.google.com","caption":null,"category":"Pool & Beach","datePosted":"2019-05-09T23:35:28-04:00","helpfulVotes":2}],

    //     "gymAlbum":[{"_id":"001","user":"Spencer Davis","userAvatarURL":"www.google.com","caption":null,"category":"Gym","datePosted":"2019-01-28T11:19:13-05:00","helpfulVotes":5},{"_id":"5eed5e121b81ed33e65a8b9e","user":"Humphrey Muleba","userAvatarURL":"https://images.unsplash.com/profile-1533938603496-a558c9b54f56?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128","imageUrl":"https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0Mjk4NH0","caption":"instagram @good.citizen","category":"Gym","datePosted":"2018-10-25T15:52:58-04:00","helpfulVotes":1},{"_id":"5eed5e121b81ed33e65a8b9f","user":"Javier Santos Guzmán","userAvatarURL":"https://images.unsplash.com/profile-1580672464502-84958a7e5224image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128","imageUrl":"https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0Mjk4NH0","caption":"www.javiersantos.blog ","category":"Gym","datePosted":"2020-01-28T20:31:22-05:00","helpfulVotes":2}],"__v":0
    // ]} />);
  // });

  xit('should render correctly', () => {
    const CarouselComponent = shallow(<Carousel />);
    expect(CarouselComponent).toMatchSnapshot();
  });

  xit('should render photo preview', () => {
    const photoPreview = CarouselComponent.find('CarouselPhotostrip');
    expect(photoPreview.length).toEqual(1);
  })

  xit('should update state', () => {
    const CarouselComponent = shallow(<Carousel
      preview={
        {preview: [{_id: 1, imageUrl: 'www.google.com'}] }
      }
      currentPhotoIndex={ {test: 0} }
    />);
    expect(CarouselComponent.state('currentPhotoIndex')).toBe(0);
    // const CarouselComponent = mount(<Carousel />);
    // const startState = {currentPhotoIndex: 0}
    // const newState = Carousel.nextPhoto();
    // expect(newState.currentPhotoIndex).toEqual(1);
  });

});
