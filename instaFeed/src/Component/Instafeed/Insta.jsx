import React, { Component } from "react";
import "./Insta.css";

export class Insta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "Vishal Vasudha",
          message:
            "Coming through the fire and through the storm of life with a strong man, my fiance Ashanti, whom I've been dating for eight months and two wonderful children beside me,",
          img: "./insta-img/APPAREL-F-850x1165.jpg",
          pimg:"./insta-img/images (1).jpg"
        },
        {
          id: 2,
          name: "Rajesh Ravi",
          message:
            "There certainly is no secret in that there are plenty of people who don't like plenty of my movies. Each one of my films is personal each one of my films is emotionally autobiographical",
          img: "./insta-img/BENGALURU-1-1.jpg",
          pimg:"./insta-img/4-2.jpg"
        },
        {
          id: 3,
          name: "Nitika Sudhir",
          message:
            "In politics almost all of us are nerds, so that's just a given... but we're cool nerds.",
          img: "./insta-img/DELHI.jpg",
          pimg:"./insta-img/images (2).jpg"
        },
        {
          id: 4,
          name: "Susheela Meena",
          message:
            "The belief that all genuine education comes about through experience does not mean that all experiences are genuinely or equally educative.",
          img: "./insta-img/guwahati-1.jpeg",
          pimg:"./insta-img/images (3).jpg"
        },
        {
          id: 5,
          name: "Indrajit Apurva",
          message:
            "Even in the darkest regions, people have discovered their right of freedom",
          img: "./insta-img/HYD.jpg",
          pimg:"./insta-img/images.jpg"
        },
        {
          id: 6,
          name: "Chandan Sitaram",
          message:
            "All the reasonings of men are not worth one sentiment of women.",
          img: "./insta-img/MUMBAI-2.jpg",
          pimg:"./insta-img/istockp.jpg"
        },
        {
          id: 7,
          name: "Malini Priyanka",
          message:
            "If you cannot work on the marriage or the women is a moron, staying married and cheating makes the most sense because divorce is disruptive to the family life and your bank account.",
          img: "./insta-img/WOMEN-850x1165.jpg",
          pimg:"./insta-img/photo3.jpg"
        },
        {
          id: 8,
          name: "Ananth Tara",
          message:
            "My background was computer science and business school, so eventually I worked my way up where I was running product groups - development, testing, marketing, user education.",
          img: "./insta-img/MAN-F-850x1165.jpg",
          pimg:"./insta-img/photo4.jpg"
        },
      ],
    };
  }

  render() {
    return (<>
    {
         this.state.data.map((xyz) => {
            return (
              <div className="feed">
                <div className="pimg">
                  <div><img src={xyz.pimg} alt="" /></div>
                  <p>{xyz.name}</p>
                </div>
                <div className="img">
                  <img src={xyz.img} alt="" />
                </div>
                <p>{xyz.message}</p>
                <div className="btn">
                  <button>Like</button>
                  <button>Comment</button>
                  <button>Suscribe</button>
                </div>
              </div>
            );
          })
    }
    </>)
  }
}
