const skills = require('../data/SkillsRegistry.json');

const SkillManager = {
  listSkills: () => skills,
  
  findSkill: (query) => {
    return skills.skills.filter(s => 
      s.name.toLowerCase().includes(query.toLowerCase()) || 
      s.desc.toLowerCase().includes(query.toLowerCase())
    );
  },

  orchestrate: async (skillId, task) => {
    const skill = skills.skills.find(s => s.id === skillId);
    if (!skill) throw new Error('Skill not found');
    
    // Logic to delegate task to a specialized agent
    console.log(`Delegating task "${task}" to skill: ${skill.name}`);
    return `Task delegated to ${skill.name}`;
  }
};

module.exports = SkillManager;
