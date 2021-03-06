import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, ObservableInput, throwError } from 'rxjs';

import { ProjectService } from '../../../services/projects.service';
import { IProject, IProjectApiResponse } from '../../../models/IProject.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  loading: boolean;
  projects: IProject[];
  errorMessage: string;

  constructor(
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    this.loading = true;

    this.projectService.getAllProjects()
      .pipe(
        catchError(this.handleError)
      )
      .subscribe((res: IProjectApiResponse) => {
        if (res.data.length === 0) {
          this.errorMessage = 'There are no projects at this time.';
        } else {
          this.projects = this.sortProjects(res.data);
        }
        this.loading = false;
      });
  }

  sortProjects(raw: IProject[]): IProject[] {
    let sorted: IProject[];

    sorted = raw.sort((a: IProject, b: IProject): number => {
      return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
    });

    return sorted;
  }

  handleError = (error: any, co: Observable<IProjectApiResponse>): ObservableInput<any> => {
    this.errorMessage = 'An error has while occurred trying to load the projects.';
    this.loading = false;

    return throwError(error.message);
  }
}
