const fs = require('fs');
const path = require('path');

// === 配置文件路径 ===
const filePath = 'D:\\skills\\SelfCraftedTools\\GREvocaAssistant\\GRE单词备份_2025-09-06.json';

// === 读取并解析 JSON ===
let data, items;
try {
  const jsonContent = fs.readFileSync(filePath, 'utf-8');
  data = JSON.parse(jsonContent);
  items = data.data;
  if (!Array.isArray(items)) {
    console.error('❌ data 字段不是数组，无法处理');
    process.exit(1);
  }
} catch (err) {
  console.error('❌ 读取或解析 JSON 文件失败：', err.message);
  process.exit(1);
}

console.log(`📊 总词条数: ${items.length}`);

// === 检查重复 id ===
const idMap = new Map();
const duplicates = [];

for (const item of items) {
  if (idMap.has(item.id)) {
    duplicates.push(item);
  } else {
    idMap.set(item.id, true);
  }
}

if (duplicates.length > 0) {
  console.log('❌ 发现重复 ID：');
  console.log(JSON.stringify(duplicates, null, 2));
} else {
  console.log('✅ 所有 ID 唯一，无重复');
}

// === 询问是否重新生成 UUID ===
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\n是否为所有条目重新生成 UUID？(yes/no): ', (answer) => {
  rl.close();

  const trimmed = answer.trim().toLowerCase();
  if (trimmed !== 'yes' && trimmed !== 'y') {
    console.log('👋 未生成新 UUID，程序退出。');
    return;
  }

  // ✅ 开始重新生成 UUID
  console.log('🔄 正在为所有条目生成新的 UUID...');

  // 创建备份文件
  const backupPath = filePath.replace(/\.json$/i, `_backup_${new Date().toISOString().slice(0, 10)}_${Date.now()}.json`);
  try {
    fs.writeFileSync(backupPath, fs.readFileSync(filePath));
    console.log(`📦 已备份原文件到: ${path.basename(backupPath)}`);
  } catch (err) {
    console.warn('⚠️ 备份失败，但仍继续处理：', err.message);
  }

  // 为每个条目生成新 UUID
  const oldToNewIdMap = new Map();
  items.forEach(item => {
    const oldId = item.id;
    const newId = crypto.randomUUID(); // ✅ 使用标准 UUID
    oldToNewIdMap.set(oldId, newId);
    item.id = newId;
  });

  // 保存回文件
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`✅ 所有 ID 已更新为 UUID，文件已保存: ${path.basename(filePath)}`);
    console.log(`🔁 共更新 ${items.length} 个条目`);
  } catch (err) {
    console.error('❌ 保存文件失败：', err.message);
    process.exit(1);
  }
});