import axios from "axios";

export default async function handler(req, res) {
  const query = req.query.query || "developer jobs in nigeria";

  try {
    const response = await axios.get("https://jsearch.p.rapidapi.com/search", {
      params: {
        query,
        page: "1",
        num_pages: "1",
        country: "ng",
        date_posted: "3days",
        job_requirements: "under_3_years_experience",
      },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    });

    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching jobs" });
  }
}
