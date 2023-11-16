import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { UserProfile } from 'src/app/models/user-profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  userProfile!: UserProfile;
  editSuccess = false;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.userProfile = this.profileService.getUserProfile();
  }

  onSubmit(): void {
    this.profileService.setUserProfile(this.userProfile);
    this.editSuccess = true;

    this.router.navigate(['/profile'], { queryParams: { editSuccess: true } });
  }
}