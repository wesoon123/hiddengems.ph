// Import the Cloudinary class.
import {Cloudinary} from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'wess_kill'
  }
});

// cld.image returns a CloudinaryImage with the configuration set.
const myImage = cld.image('sample'); // sample is the public ID of the image.

// This returns: https://res.cloudinary.com/demo/image/upload/sample
const myURL = myImage.toURL();