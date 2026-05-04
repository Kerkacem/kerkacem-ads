const axios = require('axios');

class MetaApiService {
  constructor(accessToken) {
    this.client = axios.create({
      baseURL: 'https://graph.facebook.com/v18.0',
      params: { access_token: accessToken }
    });
  }

  async getAdAccounts() {
    try {
      const response = await this.client.get('/me/adaccounts');
      return response.data;
    } catch (error) {
      console.error('Error fetching ad accounts:', error.response?.data || error.message);
      throw error;
    }
  }

  async getCampaigns(adAccountId) {
    try {
      const response = await this.client.get(`/${adAccountId}/campaigns`);
      return response.data;
    } catch (error) {
      console.error('Error fetching campaigns:', error.response?.data || error.message);
      throw error;
    }
  }
}

module.exports = MetaApiService;
