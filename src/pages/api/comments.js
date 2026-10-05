const API_URL = process.env.API_URL;

export default async function handlerComment(req, res) {
  try {
    if (!API_URL) {
      return res
        .status(500)
        .json({ error: "API_URL 환경변수가 설정되지 않았습니다." });
    }

    if (req.method === "POST") {
      const { articleId, ...newData } = req.body;

      if (!articleId) {
        return res.status(400).json({ error: "articleId가 필요합니다." });
      }

      const response = await fetch(
        `${API_URL}/api/articles/${articleId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        },
      );

      const data = await response.json();
      return res.status(response.status).json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "서버 오류가 발생했습니다." })
  }
}
