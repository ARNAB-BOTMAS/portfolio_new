// src/apiService.js

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchProfileData = async () => {
  const endpoint = `${BASE_URL}/profile`;

  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return [];
  }
};

export const fetchSocialData = async () => {
  const endpoint = `${BASE_URL}/social`;

  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return [];
  }
};

export const fetchSkills = async () => {
  const endpoint = `${BASE_URL}/skills`;

  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return [];
  }
};

export const fetchEdu = async () => {
  const endpoint = `${BASE_URL}/education`;

  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return [];
  }
};

export const fetchExp = async () => {
  const endpoint = `${BASE_URL}/experience`;

  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return [];
  }
};

export const fetchProject = async () => {
  const endpoint = `${BASE_URL}/projects`;

  try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return [];
  }
};