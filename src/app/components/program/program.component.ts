import { Component } from '@angular/core';

@Component({
  selector: 'sxp-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent {
  public selectedProgramYear: string;
  public successfulLaunch: boolean;
  public successfulLanding: boolean;
  public isVisible: boolean = false; // Add isVisible property

  public onProgramYearChange(event: string): void {
    this.selectedProgramYear = event;
  }

  public onLaunchChange(event: boolean): void {
    this.successfulLaunch = event;
  }

  public onLandingChange(event: boolean): void {
    this.successfulLanding = event;
  }

  // Function to toggle the visibility of the content
  public toggleContent(): void {
    this.isVisible = !this.isVisible;
  }
}
