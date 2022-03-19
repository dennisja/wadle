# Toast

Yes, I know toast libraries already exists but i just wanted to experiment with using an event emitter with react instead of context

<!-- // TODO: add flow chart of how this works -->

> This toast was written in one sitting. I'd be surprised if there are no bugs but it serves the current use case. The transitions are experimental

## Usage

Render toast container at root of the application

```jsx
import { ToastContainer } from '../Toast'

const App = ()=>{
    <>
    <ToastContainer>
    {/* Other children here */}
    </>
}
```

In any other file of the application, just import and use create toast

```jsx
import { createToast } from '../Toast';

const SomeComponent = () => {
  return (
    <Button
      onClick={() =>
        createToast({
          title: 'Like You',
          messages: ['People will find you', 'But they do not define you'],
        })
      }
    >
      Create Toast
    </Button>
  );
};
```
