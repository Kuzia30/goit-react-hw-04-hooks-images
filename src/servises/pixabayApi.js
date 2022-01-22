import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "24347539-7a784c76778ec6b315780761f";

async function fetchPictures(name, page = 1) {
  try {
    const response = await axios.get(
      `?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchPictures;
