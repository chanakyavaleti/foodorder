import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-postab',
  templateUrl: './postab.component.html',
  styleUrls: ['./postab.component.scss'],

})
export class PostabComponent implements OnInit {
  logos = [
    { img: '../../assets/imagesVideos/logo.jpg' },
    { img: '../../assets/imagesVideos/logo1.jpg' },
    { img: '../../assets/imagesVideos/logo2.webp' },
    { img: '../../assets/imagesVideos/logo5.png' },
    { img: '../../assets/imagesVideos/logo6.jpg' },
    { img: '../../assets/imagesVideos/logo7.jpg' },
    { img: '../../assets/imagesVideos/logo8.png' },
    { img: '../../assets/imagesVideos/logo9.avif' },
    { img: '../../assets/imagesVideos/logo10.jpg' },
    { img: '../../assets/imagesVideos/logo11.png' },
    { img: '../../assets/imagesVideos/logo12.png' },
    { img: '../../assets/imagesVideos/logo13.png' },
  ];

  posrestaurent = [
    {
      title: 'Automated Billing and Accounting',
      matter: 'Say goodbye to manual errors and hello to seamless payments. Ordermatic handles all billing, payments and accounting, giving you more time to focus on your customers. Offering credit to trusted customers? Follow up and collect all pending bills at their convenience.',
      type: 'export',
      end: 'Explore all features',
      img: '../../assets/imagesVideos/automatedbilling.png'
    },
    {
      title: 'One Online Ordering System to Manage All Your Orders',
      matter: 'Accept online orders, manage menus, mark food ready, collect payments, and track revenue—all from a single screen',
      type: 'demo',
      end: 'Book a Demo',
      img: '../../assets/imagesVideos/oneOnline.png'
    },
    {
      title: 'Reporting and Insights',
      matter: 'Grow your business with data-driven insights provided by experts. Use comprehensive reports to make informed decisions and drive your food businesse’s success.',
      type: 'demo',
      end: 'Book a Demo',
      img: '../../assets/imagesVideos/report.png'
    },
    {
      title: 'Inventory Management',
      matter: 'Reduce losses and waste by efficiently tracking your inventory levels. Ordermatic helps you keep an eye on stock, predict needs, and prevent over-ordering, ultimately saving money and resources.',
      type: 'demo',
      end: 'Book a Demo',
      img: '../../assets/imagesVideos/inventory.png'
    },
    {
      title: 'Expense Dashboard',
      matter: 'Master your cash flow by tracking every procurement cost from dairy to dry goods in real-time. Ordermatic helps you categorize spending, monitor vendor performance, and analyze purchase history to protect your profit margins. Gain total financial clarity and eliminate hidden leaks in your daily business operations.',
      type: 'demo',
      end: 'Book a Demo',
      img: '../../assets/imagesVideos/expence.png'
    },
  ]


  intefrated=[
    {
      img:'../../assets/imagesVideos/integrated1.png',
      title:'Integrated Merchant Payment QR',
      matter:'Simplify the way your customers pay with Ordermatic’s Integrated Merchant Payment QR. Accept instant digital payments directly at the counter, table, or during delivery'
    },
     {
      img:'../../assets/imagesVideos/integrated2.png',
      title:'Home Ordering system',
      matter:'Let Customers Order From Home. Comfort Meets Convenience. With Ordermatic’s Home Ordering system, your restaurant stays just a tap away. Accept and manage online orders directly from your own branded link or website—no third-party commissions, no hassle'
    },
     {
      img:'../../assets/imagesVideos/integrated3.png',
      title:'Streamline Deliveries. Satisfy Customers. Grow Smarter.',
      matter:'Simplify and optimize your entire delivery process with Ordermatic’s Delivery Module. From order dispatch to doorstep delivery, manage it all in one place—faster, smarter, and more efficiently.'
    },
     {
      img:'../../assets/imagesVideos/integrated4.png',
      title:'CRM',
      matter:'The Bill Isn’t the End — It’s Just the Beginning With Ordermatic CRM, understand your customers beyond the transaction. Build lasting relationships through smart tools that help you personalize experiences, earn trust, and drive loyalty.'
    }
  ]

  outlets=[
    {
      img:'../../assets/imagesVideos/CafeTea-Shops.webp',
      name:'Cafe'
    },
    {
      img:'../../assets/imagesVideos/Restaurants.webp',
      name:'Fine dine'
    },
    {
      img:'../../assets/imagesVideos/Bar--Breweries.webp',
      name:'Bar & brewery'
    },
    {
      img:'../../assets/imagesVideos/QSRS.webp',
      name:'QSR'
    },
    {
      img:'../../assets/imagesVideos/Large-chain.webp',
      name:'Large chains'
    },
    {
      img:'../../assets/imagesVideos/Bakery.webp',
      name:'Bakery'
    },
    {
      img:'../../assets/imagesVideos/Tiffin-Centers.webp',
      name:'Tiffin Centers'
    },
    {
      img:'../../assets/imagesVideos/Street-Vendors.webp',
      name:'Street Vendors'
    },
    {
      img:'../../assets/imagesVideos/Curry-Points.webp',
      name:'Curry Points'
    },
    {
      img:'../../assets/imagesVideos/Grocery-Stores.webp',
      name:'Grocery Store'
    },

  ]
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  demotab() {

    document.getElementById('demotabhome')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  navigate(type: any) {
    if (type == 'export') {
      this.router.navigate(['/allfeatures']);
    }
    else {
      this.demotab()
    }
  }
}
