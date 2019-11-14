class HomePage {
  showHeader = () => {
    console.log('Header');
  }

  showBody = () => {
    console.log('News');
  }

  showFooter = () => {
    console.log('Footer');
  }

  showPageContent = () => {
    console.log('--------------------');
    this.showHeader();
    this.showBody();
    this.showFooter();
    console.log('--------------------');
  }
}

class ProfilePage extends HomePage {
  showBody = () => {
    console.log('Profile info');
  }
}

class SettingsPage extends HomePage {
  showBody = () => {
    console.log('Profile settings');
  }
}

const profilePage = new ProfilePage();
const settingsPage = new SettingsPage();
profilePage.showPageContent();
settingsPage.showPageContent();