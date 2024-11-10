import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  averageSeasons: number=0;
  series: Array<Serie> = [];

  constructor(private SerieService: SerieService) { }


  getSeries(){
    this.SerieService.getSeries().subscribe(
      series => {
        this.series = series;
        this.calculateAverageSeasons();
      }
    );
  }

  ngOnInit(): void {
    this.getSeries();
  }
  
  calculateAverageSeasons(): void {
    if (this.series.length > 0) {
      const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.averageSeasons = totalSeasons / this.series.length;
    } 
  }

}