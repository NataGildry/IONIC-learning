import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {AllPostsComponent} from '../all-posts/all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from '../services/post.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    HttpClientModule
  ],
  exports: [
    AllPostsComponent
  ],
  declarations: [Tab2Page, AllPostsComponent],
  providers: [PostService]
})
export class Tab2PageModule {}
