import axios from 'axios';

export const fetchBannerDetails = async () => {
  try {
    const response = await axios.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details');
    return response.data.Details;
  } catch (error) {
    throw new Error('Failed to fetch banner details');
  }
};
