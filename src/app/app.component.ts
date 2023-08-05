import { Component } from '@angular/core';
import { Iplayers } from './shared/model/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchInputText !: string;
  cricket_players: Array<Iplayers> = [
    {
      name: "Sachin Tendulkar",
      team: "India",
      odi_runs: 18426,
      test_runs: 15921,
      debut_year: 1989
    },
    {
      name: "Ricky Ponting",
      team: "Australia",
      odi_runs: 13704,
      test_runs: 13378,
      debut_year: 1995
    },
    {
      name: "Kumar Sangakkara",
      team: "Sri Lanka",
      odi_runs: 14234,
      test_runs: 12400,
      debut_year: 2000
    },
    {
      name: "Rahul Dravid",
      team: "India",
      odi_runs: 10889,
      test_runs: 13288,
      debut_year: 1996
    },
    {
      name: "Brian Lara",
      team: "West Indies",
      odi_runs: 10405,
      test_runs: 11953,
      debut_year: 1990
    },
    {
      name: "Jacques Kallis",
      team: "South Africa",
      odi_runs: 11579,
      test_runs: 13289,
      debut_year: 1995
    },
    {
      name: "Virat Kohli",
      team: "India",
      odi_runs: 12169,
      test_runs: 7547,
      debut_year: 2008
    },
    {
      name: "AB de Villiers",
      team: "South Africa",
      odi_runs: 9577,
      test_runs: 8765,
      debut_year: 2004
    },
    {
      name: "Sourav Ganguly",
      team: "India",
      odi_runs: 11363,
      test_runs: 7212,
      debut_year: 1992
    },
    {
      name: "MS Dhoni",
      team: "India",
      odi_runs: 10773,
      test_runs: 4876,
      debut_year: 2004
    },
    {
      name: "Kane Williamson",
      team: "New Zealand",
      odi_runs: 6173,
      test_runs: 7115,
      debut_year: 2010
    },
    {
      name: "Steve Smith",
      team: "Australia",
      odi_runs: 4162,
      test_runs: 7540,
      debut_year: 2010
    },
    {
      name: "Hashim Amla",
      team: "South Africa",
      odi_runs: 8113,
      test_runs: 9282,
      debut_year: 2004
    },
    {
      name: "Chris Gayle",
      team: "West Indies",
      odi_runs: 10480,
      test_runs: 7215,
      debut_year: 2000
    },
    {
      name: "Sanath Jayasuriya",
      team: "Sri Lanka",
      odi_runs: 13430,
      test_runs: 6973,
      debut_year: 1989
    },
    {
      name: "Mahela Jayawardene",
      team: "Sri Lanka",
      odi_runs: 12650,
      test_runs: 11814,
      debut_year: 1997
    },
    {
      name: "Shahid Afridi",
      team: "Pakistan",
      odi_runs: 8064,
      test_runs: 1716,
      debut_year: 1996
    },
    {
      name: "Shoaib Malik",
      team: "Pakistan",
      odi_runs: 7534,
      test_runs: 1898,
      debut_year: 1999
    },
    {
      name: "Yuvraj Singh",
      team: "India",
      odi_runs: 8701,
      test_runs: 1900,
      debut_year: 2000
    },
    {
      name: "Rohit Sharma",
      team: "India",
      odi_runs: 9205,
      test_runs: 7879,
      debut_year: 2007
    },
    {
      name: "Graeme Smith",
      team: "South Africa",
      odi_runs: 6989,
      test_runs: 9265,
      debut_year: 2002
    },
    {
      name: "Babar Azam",
      team: "Pakistan",
      odi_runs: 3359,
      test_runs: 2045,
      debut_year: 2015
    },
    {
      name: "Joe Root",
      team: "England",
      odi_runs: 6162,
      test_runs: 9030,
      debut_year: 2012
    },
    {
      name: "Tamim Iqbal",
      team: "Bangladesh",
      odi_runs: 7896,
      test_runs: 4493,
      debut_year: 2007
    },
    {
      name: "Quinton de Kock",
      team: "South Africa",
      odi_runs: 5135,
      test_runs: 3038,
      debut_year: 2014
    },
    {
      name: "David Warner",
      team: "Australia",
      odi_runs: 5455,
      test_runs: 7244,
      debut_year: 2009
    },
    {
      name: "Shane Watson",
      team: "Australia",
      odi_runs: 5757,
      test_runs: 3731,
      debut_year: 2002
    },
    {
      name: "Ben Stokes",
      team: "England",
      odi_runs: 2680,
      test_runs: 4679,
      debut_year: 2013
    },
    {
      name: "Imran Khan",
      team: "Pakistan",
      odi_runs: 3709,
      test_runs: 3807,
      debut_year: 1971
    },
    {
      name: "Wasim Akram",
      team: "Pakistan",
      odi_runs: 3717,
      test_runs: 2898,
      debut_year: 1984
    },
    {
      name: "Vivian Richards",
      team: "West Indies",
      odi_runs: 6721,
      test_runs: 8540,
      debut_year: 1974
    },
    {
      name: "Ian Botham",
      team: "England",
      odi_runs: 2113,
      test_runs: 5200,
      debut_year: 1977
    },
    {
      name: "Shaun Pollock",
      team: "South Africa",
      odi_runs: 3519,
      test_runs: 3781,
      debut_year: 1995
    },
    {
      name: "Kapil Dev",
      team: "India",
      odi_runs: 3783,
      test_runs: 5248,
      debut_year: 1978
    },
    {
      name: "Allan Border",
      team: "Australia",
      odi_runs: 6524,
      test_runs: 11174,
      debut_year: 1978
    }
  ]
}