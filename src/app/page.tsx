'use client';

import { UploadButton } from '~/uploadthing';

const generateText = (length: number) => {
  return Array(length)
    .fill('')
    .map(() => '0')
    .join('');
};

export default function Home() {
  return (
    <main>
      <UploadButton
        // have to restart server to see changes to onBeforeUploadBegin
        onBeforeUploadBegin={(files) => {
          console.log(generateText(1000) + '-' + files[0]!.name);
          return files.map(
            (f) =>
              new File([f], generateText(1000) + '-' + f.name, {
                type: f.type,
              })
          );
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log('Files: ', res);
          alert('Upload Completed');
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
