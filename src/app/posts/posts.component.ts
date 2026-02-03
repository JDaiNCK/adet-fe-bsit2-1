import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts = [
    {
      title: 'First Post',
      description: 'This is the description of the first post.'
    },
    {
      title: 'Second Post',
      description: 'Here is some more content for another post.'
    },
    {
      title: 'Third Post',
      description: 'Yet another example post description.'
    }
  ];

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}
