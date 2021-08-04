import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
import { ITheme } from '../../shared/interfaces';
import { IPost } from '../../shared/interfaces';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {


  get isLogged(): boolean {
    return this.userService.isLogged;
  }
    
  themes: ITheme[] | undefined;
  recentPosts: IPost[] | undefined;


  constructor(
    private contentService: ContentService,
    private userService: UserService
  ) {
    this.fetchTheme();
    this.fetchRecentPost();
  }

  fetchTheme(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }


  fetchRecentPost(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }

}
