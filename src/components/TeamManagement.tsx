import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Plus, Edit, Trash2, User } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  level: 'ceo' | 'executive' | 'manager' | 'team';
  reportsTo?: string;
  gradient: string;
}

export function TeamManagement() {
  const { theme } = useTheme();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState<TeamMember | null>(null);

  const gradients = [
    'from-purple-600 to-blue-600',
    'from-blue-600 to-cyan-600',
    'from-emerald-600 to-teal-600',
    'from-orange-600 to-red-600',
    'from-violet-600 to-purple-600',
    'from-blue-600 to-blue-600',
  ];

  useEffect(() => {
    const saved = localStorage.getItem('team_members');
    if (saved) {
      setMembers(JSON.parse(saved));
    }
  }, []);

  const saveMembers = (newMembers: TeamMember[]) => {
    setMembers(newMembers);
    localStorage.setItem('team_members', JSON.stringify(newMembers));
  };

  const handleAddNew = () => {
    setCurrentMember({
      id: Date.now().toString(),
      name: '',
      role: '',
      department: '',
      image: '',
      bio: '',
      email: '',
      linkedin: '',
      twitter: '',
      level: 'team',
      reportsTo: '',
      gradient: gradients[Math.floor(Math.random() * gradients.length)],
    });
    setIsEditing(true);
  };

  const handleEdit = (member: TeamMember) => {
    setCurrentMember(member);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this team member?')) {
      saveMembers(members.filter(m => m.id !== id));
    }
  };

  const handleSave = () => {
    if (!currentMember) return;

    const existingIndex = members.findIndex(m => m.id === currentMember.id);
    if (existingIndex >= 0) {
      const updated = [...members];
      updated[existingIndex] = currentMember;
      saveMembers(updated);
    } else {
      saveMembers([...members, currentMember]);
    }

    setIsEditing(false);
    setCurrentMember(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentMember(null);
  };

  const updateField = (field: keyof TeamMember, value: any) => {
    if (currentMember) {
      setCurrentMember({ ...currentMember, [field]: value });
    }
  };

  const getLevelMembers = (level: string) => {
    return members.filter(m => m.level === level);
  };

  if (isEditing && currentMember) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl"
      >
        <div className={`p-8 rounded-2xl border ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200'
        }`}>
          <h2 className={`text-2xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {members.find(m => m.id === currentMember.id) ? 'Edit Team Member' : 'New Team Member'}
          </h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  value={currentMember.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Role/Position *
                </label>
                <input
                  type="text"
                  value={currentMember.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  placeholder="Senior Developer"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
            </div>

            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Profile Image URL *
              </label>
              <input
                type="url"
                value={currentMember.image}
                onChange={(e) => updateField('image', e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
              {currentMember.image && (
                <img
                  src={currentMember.image}
                  alt="Preview"
                  className="mt-4 w-32 h-32 object-cover rounded-xl"
                />
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Department
                </label>
                <input
                  type="text"
                  value={currentMember.department}
                  onChange={(e) => updateField('department', e.target.value)}
                  placeholder="Engineering, Design, etc."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Hierarchy Level *
                </label>
                <select
                  value={currentMember.level}
                  onChange={(e) => updateField('level', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                >
                  <option value="ceo">CEO Level</option>
                  <option value="executive">Executive (C-Suite)</option>
                  <option value="manager">Manager/Lead</option>
                  <option value="team">Team Member</option>
                </select>
              </div>
            </div>

            {(currentMember.level === 'manager' || currentMember.level === 'team') && (
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Reports To
                </label>
                <input
                  type="text"
                  value={currentMember.reportsTo}
                  onChange={(e) => updateField('reportsTo', e.target.value)}
                  placeholder="Manager's name"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
            )}

            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Bio (optional)
              </label>
              <textarea
                value={currentMember.bio}
                onChange={(e) => updateField('bio', e.target.value)}
                placeholder="Brief bio about the team member..."
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Email (optional)
                </label>
                <input
                  type="email"
                  value={currentMember.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="john@bytechsol.com"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  LinkedIn (optional)
                </label>
                <input
                  type="url"
                  value={currentMember.linkedin}
                  onChange={(e) => updateField('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/..."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Twitter (optional)
                </label>
                <input
                  type="url"
                  value={currentMember.twitter}
                  onChange={(e) => updateField('twitter', e.target.value)}
                  placeholder="https://twitter.com/..."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
            </div>

            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Gradient Color
              </label>
              <select
                value={currentMember.gradient}
                onChange={(e) => updateField('gradient', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              >
                {gradients.map((g, i) => (
                  <option key={i} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
              >
                Save Member
              </button>
              <button
                onClick={handleCancel}
                className={`px-6 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'border-slate-700 text-slate-400 hover:bg-slate-800'
                    : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Team Hierarchy
          </h2>
          <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
            Manage your team structure and members
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5" />
          New Member
        </button>
      </div>

      {members.length === 0 ? (
        <div className={`p-12 rounded-2xl border border-dashed text-center ${
          theme === 'dark'
            ? 'border-slate-800 bg-slate-900/50'
            : 'border-slate-300 bg-slate-50'
        }`}>
          <User className={`w-16 h-16 mx-auto mb-4 ${
            theme === 'dark' ? 'text-slate-700' : 'text-slate-400'
          }`} />
          <h3 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            No team members yet
          </h3>
          <p className={`mb-6 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
            Add your first team member to build your organization
          </p>
          <button
            onClick={handleAddNew}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
          >
            Add First Member
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* CEO Level */}
          {getLevelMembers('ceo').length > 0 && (
            <div>
              <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                CEO Level
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getLevelMembers('ceo').map((member) => (
                  <MemberCard key={member.id} member={member} onEdit={handleEdit} onDelete={handleDelete} theme={theme} />
                ))}
              </div>
            </div>
          )}

          {/* Executives */}
          {getLevelMembers('executive').length > 0 && (
            <div>
              <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Executive Team (C-Suite)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getLevelMembers('executive').map((member) => (
                  <MemberCard key={member.id} member={member} onEdit={handleEdit} onDelete={handleDelete} theme={theme} />
                ))}
              </div>
            </div>
          )}

          {/* Managers */}
          {getLevelMembers('manager').length > 0 && (
            <div>
              <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Managers & Leads
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getLevelMembers('manager').map((member) => (
                  <MemberCard key={member.id} member={member} onEdit={handleEdit} onDelete={handleDelete} theme={theme} />
                ))}
              </div>
            </div>
          )}

          {/* Team */}
          {getLevelMembers('team').length > 0 && (
            <div>
              <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Team Members
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getLevelMembers('team').map((member) => (
                  <MemberCard key={member.id} member={member} onEdit={handleEdit} onDelete={handleDelete} theme={theme} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MemberCard({ member, onEdit, onDelete, theme }: { member: TeamMember; onEdit: (m: TeamMember) => void; onDelete: (id: string) => void; theme: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-2xl border ${
        theme === 'dark'
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <img
          src={member.image}
          alt={member.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h4 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {member.name}
          </h4>
          <p className={`text-sm bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
            {member.role}
          </p>
          {member.reportsTo && (
            <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
              Reports to: {member.reportsTo}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(member)}
          className={`flex-1 px-3 py-2 rounded-lg text-sm ${
            theme === 'dark'
              ? 'bg-slate-800 text-slate-400 hover:text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(member.id)}
          className={`px-3 py-2 rounded-lg text-sm ${
            theme === 'dark'
              ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
              : 'bg-red-50 text-red-600 hover:bg-red-100'
          }`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
