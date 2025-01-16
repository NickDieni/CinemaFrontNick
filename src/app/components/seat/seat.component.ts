import { Component } from '@angular/core';
import { Seat } from '../../models/seat'; // Ensure the path is correct
import { GenericService } from '../../service/generic.service'; // Adjust path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent {
  seats: Seat[] = [];

  constructor(private genericService: GenericService<Seat>) {}

  // Method to generate seats
  generateSeats(theaterId: string, rows: string, seatsPerRow: string) {
    this.seats = [];
    const parsedTheaterId = parseInt(theaterId, 10);
    const parsedRows = parseInt(rows, 10);
    const parsedSeatsPerRow = parseInt(seatsPerRow, 10);

    if (!parsedTheaterId || !parsedRows || !parsedSeatsPerRow) {
      alert('Please enter valid values for theater ID, rows, and seats per row.');
      return;
    }

    for (let row = 1; row <= parsedRows; row++) {
      for (let seatNum = 1; seatNum <= parsedSeatsPerRow; seatNum++) {
        this.seats.push({
          theaterId: parsedTheaterId,
          rowNumber: row,
          seatNumber: seatNum
        });
      }
    }
  }

  // Method to save seats via API
  saveSeats() {
    const endpoint = 'Seat'; // Example API endpoint
    this.seats.forEach((seat) => {
      const seatDto = {
        theaterId: seat.theaterId,
        rowNumber: seat.rowNumber,
        seatNumber: seat.seatNumber,
      };
      console.log('Sending seat data:', seatDto); // Debugging output
      this.genericService.genericCreate(seatDto, endpoint).subscribe({
        next: (response) => console.log('Seat created successfully:', response),
        error: (err) => console.error('Error creating seat:', err),
      });
    });
  }
  
}
