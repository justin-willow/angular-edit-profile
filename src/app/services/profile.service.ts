import { Injectable } from '@angular/core';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private userProfile: UserProfile = {
    name: 'Grant Chirpus',
    contact: 'grant@grandcircus.co',
    bio: 'I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS',
  };

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  setUserProfile(newProfile: UserProfile): void {
    this.userProfile = { ...newProfile };
  }
}