
export const greet = (...namePassedIn) => {

    const formatter = new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' });
    const formatted = formatter.format(namePassedIn);

    if (formatted === '') {
      return `You should fill in your name`;
    } else {
     return `Welcome to SALT, ${formatted}`;
    }
  };


