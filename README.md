# react-toast-notify-lite



A lightweight, customizable React toast notification library with TypeScript support.



## Features



- Six notification types: success, error, warning, info, loading, and default

- Six container positions

- Customizable titles, descriptions, and durations

- Automatic and manual dismissal

- TypeScript support



## Installation



```bash

npm install react-toast-notify-lite

```



## Usage



```tsx

import { ToastContainer, toast } from 'react-toast-notify-lite';

import 'react-toast-notify-lite/styles.css';



function App() {

  return (

    <>

      <button onClick={() => toast.success('Changes saved!')}>

        Show notification

      </button>

      <ToastContainer position="bottom-right" />

    </>

  );

}



export default App;

```



## Notification types



```tsx

toast.success('Saved successfully!');

toast.error('Something went wrong');

toast.warning('Please check your input');

toast.info('Here is some information');

toast.loading('Processing...');

toast('A standard notification');

```



## Custom options



```tsx

toast({

  title: 'Profile updated',

  description: 'Your changes have been saved.',

  type: 'success',

  duration: 4000,

  closable: true,

});

```



## Container positions



- `top-left`

- `top-center`

- `top-right`

- `bottom-left`

- `bottom-center`

- `bottom-right`



## Dismiss and update notifications



```tsx

const id = toast.loading('Uploading...');



toast.update(id, {

  title: 'Upload complete',

  type: 'success',

  duration: 4000,

});



toast.dismiss(id);

toast.dismissAll();

```



## License



MIT


