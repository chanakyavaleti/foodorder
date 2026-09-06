import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allfeatures',
  templateUrl: './allfeatures.component.html',
  styleUrls: ['./allfeatures.component.scss']
})
export class AllfeaturesComponent implements OnInit {

  quickItems=[
    { img:'../../assets/imagesVideos/quick1.webp',matter:'Always stay online even with your mobile data' },
    { img:'../../assets/imagesVideos/quick2.webp',matter:'Works on any hardware' },
    { img:'../../assets/imagesVideos/quick3.webp',matter:'Simple POS' },
    { img:'../../assets/imagesVideos/quick4.webp',matter:'Keyboard / touchscreen view' },
    { img:'../../assets/imagesVideos/quick5.webp',matter:'QR scan & order' },
    { img:'../../assets/imagesVideos/quick6.webp',matter:'Followups' },
  ];
  morethanthe=[
    { img:'../../assets/imagesVideos/more1.webp',matter:'Let your customers browse, order, and pay from their own devices. Minimize contact and maximize convenience.',title:'Streamlined Ordering with Digital QR Menus' },
    { img:'../../assets/imagesVideos/more2.webp',matter:'Effortlessly manage table assignments and reservations. Ensure every guest is seated promptly and enjoys a smooth dining experience.',title:'Simplified Table Management for Dine-In' },
    { img:'../../assets/imagesVideos/more3.webp',matter:'Boost your takeaway and delivery operations with quick, efficient order processing. Keep your customers satisfied with faster service and accurate orders. Offer scheduled ordering from home to returning customers for maximum convenience.',title:'Faster Order Processing for Takeaway and Deliveries' },
    { img:'../../assets/imagesVideos/more4.webp',matter:'Efficiently manage your staff, including Captains, Managers, and Chefs. Grant granular access control to different features, ensuring each staff member has the right access levels to perform their duties efficiently and securely.',title:'Staff and Role Management' },
    { img:'../../assets/imagesVideos/more5.webp',matter:'Build rich customer data pools and deliver personalized experiences at every touchpoint. Reward their loyalty with points and incentives that keep them coming back.',title:'CRM – Know Your Customers, Grow Your Business' },
  ];

  intefrated=[
    {
      img:'../../assets/imagesVideos/allrounder1.png',
      title:'Don’t lose even a single bill',
      matter:'Ensure every transaction is accounted for with our automated billing and payment system.'
    },
     {
      img:'../../assets/imagesVideos/allrounder2.png',
      title:'More Customers, Less Queues',
      matter:'Optimize your customer flow and reduce wait times, making every visit a delight.'},
     {
      img:'../../assets/imagesVideos/allrounder3.png',
      title:'Automate your Kitchen(s) with KOTs.',
      matter:'Enhance your kitchen efficiency with Kitchen Order Tickets that streamline order management.' },
     {
      img:'../../assets/imagesVideos/allrounder4.png',
      title:'Go Digital - Monitor everything',
      matter:'Keep track of your entire operation from any device, anytime, anywhere.'  },
     {
      img:'../../assets/imagesVideos/allrounder5.png',
      title:'Boost customer loyalty - Increase business.',
      matter:'Provide the convenience of ordering from home to returning customers. Offer scheduled takeaway and deliveries, enhancing your business’s reach and profitability.'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

   demotab() {

    document.getElementById('demotabhome')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
