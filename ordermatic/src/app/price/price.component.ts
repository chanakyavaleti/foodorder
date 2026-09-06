import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {


  plans:any[] = [
    {
      name: 'Pro 1 year',
      duration: '1 year',
      price: '40,000'
    },
    {
      name: 'Pro 2 years',
      duration: '2 years',
      price: '70,000'
    },
    {
      name: 'Pro 3 years',
      duration: '3 years',
      price: '80,000'
    }
  ];

  features:any[] = [
    {
      name: 'Simple/Easy Billing',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Captain App',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Unlimited Self Ordering Software',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Numeric POS',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Zomato/Swiggy Integration',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Free Installation/Training(24/7 Support)',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Unlimited Staff/Role Access',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Token Display System',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Token App',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Unlimited Third Party Integrations',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Digital QR Menu',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Google Business Profile',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Real Time Reporting',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: '24/7 Outlet Monitoring (Any Where/Any Time/Any Device)',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Credit Followup Module',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'WhatsApp Business Profile(Unlimited Messaging)',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: '2X Profit Merchant Payment QR',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Integrated Payments',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Multi Device Support(Phone/PC/Tablet)',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Adaptable Print Module(Bill/KOT)',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Bluetooth/USB/WIFI/LAN Print Support',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Windows/Android/IOS/linux/MAC OS Support',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Inventory',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Table Reservation',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Personalized Website',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Online Ordering Link',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'CRM/ERP(Payroll/Purchase & More)',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Magic Feedback System',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Digital Invoice(Unlimited Series)',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Customer Calling System',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Live Order Updates(Customer/Staff)',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Delivery/Dine-In/Takeaway/Pickup/Room Dine Modules',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Bank/Accounts Reconciliation',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Customized KOT Module',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Pre-Ordering Module',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Multi-Outlet Management',
      pro1: true,
      pro2: true,
      pro3: true
    },
    {
      name: 'Google Servers',
      pro1: true,
      pro2: true,
      pro3: true
    }
  ];

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
