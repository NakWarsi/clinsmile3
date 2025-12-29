import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ClinicPhoto {
  id: number;
  title: string;
  area: string;
  description: string;
  image: string;
  features: string[];
}

@Component({
  selector: 'app-clinic-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clinic-photos.component.html',
  styleUrls: ['./clinic-photos.component.css']
})
export class ClinicPhotosComponent {
  selectedPhoto: ClinicPhoto | null = null;
  showModal = false;

  clinicPhotos: ClinicPhoto[] = [
    {
      id: 1,
      title: "Clinic Exterior",
      area: "reception",
      description: "Welcome to our modern, comfortable clinic designed for your relaxation",
      image: "images/clinic/clinic-exterior.jpg",
      features: ["Modern facility", "Easy access", "Parking available", "Welcoming entrance"]
    },
    {
      id: 2,
      title: "Clinic Interior",
      area: "reception",
      description: "Our friendly and comfortable interior space",
      image: "images/clinic/clinic-interior.jpeg",
      features: ["Comfortable seating", "Modern design", "Clean environment", "Professional atmosphere"]
    },
    {
      id: 3,
      title: "Treatment Area 1",
      area: "treatment",
      description: "State-of-the-art treatment room equipped with latest technology",
      image: "images/clinic/1.jpeg",
      features: ["Advanced equipment", "Comfortable chair", "Sterile environment", "Modern lighting"]
    },
    {
      id: 4,
      title: "Treatment Area 2",
      area: "treatment",
      description: "Another modern treatment room for various dental procedures",
      image: "images/clinic/2.jpg",
      features: ["Digital X-ray", "Intraoral camera", "Comfort amenities", "Privacy curtains"]
    },
    {
      id: 5,
      title: "Treatment Area 3",
      area: "treatment",
      description: "Modern dental treatment facility with advanced equipment",
      image: "images/clinic/3.jpg",
      features: ["Advanced technology", "Patient comfort", "Sterile environment", "Professional care"]
    },
    {
      id: 6,
      title: "Clinic Facility 4",
      area: "treatment",
      description: "Well-equipped treatment room for comprehensive dental care",
      image: "images/clinic/4.jpeg",
      features: ["Modern equipment", "Comfortable setting", "Professional care", "Advanced technology"]
    },
    {
      id: 7,
      title: "Dental Equipment",
      area: "equipment",
      description: "Advanced dental equipment for precise and comfortable treatment",
      image: "images/clinic/5.jpg",
      features: ["Digital scanners", "3D imaging", "Laser technology", "Sterilization units"]
    },
    {
      id: 8,
      title: "Advanced Technology",
      area: "equipment",
      description: "Cutting-edge technology for the best possible dental care",
      image: "images/clinic/6.jpg",
      features: ["CBCT scanner", "CAD/CAM system", "Digital impressions", "Treatment planning"]
    }
  ];

  openModal(photo: ClinicPhoto) {
    this.selectedPhoto = photo;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedPhoto = null;
  }
}
