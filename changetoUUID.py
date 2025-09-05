import json, uuid

with open("GRE单词备份_2025-09-05(1).json", "r", encoding="utf-8") as f:
    obj = json.load(f)

for word in obj["data"]:
    word["id"] = str(uuid.uuid4())  # 替换为 UUID

with open("GRE单词备份_fixed.json", "w", encoding="utf-8") as f:
    json.dump(obj, f, ensure_ascii=False, indent=2)

print("✅ 新文件已保存为 GRE单词备份_fixed.json")
