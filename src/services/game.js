const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

async function fetchData(
  path,
  { method = "GET", body = null, headers = {} } = {}
) {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: {
        ...headers,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return res.json();
  } catch (error) {
    throw new Error("Error happened while fetching data", error);
  }
}

export async function fetchLanguage(language) {
  try {
    const res = await fetchData("/api/getLanguages", {
      method: "POST",
      body: language,
    });
    return res;
  } catch (error) {
    throw new Error("Error fetching language", error);
  }
}

export async function fetchIsWord(word, language) {
  try {
    const res = await fetchData("/api/getWord", {
      method: "POST",
      body: { word, language },
      headers: {
        "content-type": "application/json",
      },
    });
    return res;
  } catch (error) {
    throw new Error("Error fetching word", error);
  }
}
