import { useState, useEffect } from 'react';
import api from '../../services/api';
import { TableSkeleton, FormSkeleton } from '../../components/ui/Skeleton';

const SocialPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    platform: 'facebook',
    postId: '',
    content: '',
    mediaUrl: '',
    mediaType: 'image',
    postedAt: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/social');
      setPosts(response.data.data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPost) {
        await api.put(`/social/${editingPost._id}`, formData);
      } else {
        await api.post('/social', formData);
      }
      fetchPosts();
      resetForm();
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/social/${id}`);
        fetchPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      platform: post.platform,
      postId: post.postId,
      content: post.content || '',
      mediaUrl: post.mediaUrl || '',
      mediaType: post.mediaType || 'image',
      postedAt: post.postedAt ? new Date(post.postedAt).toISOString().split('T')[0] : '',
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingPost(null);
    setFormData({
      platform: 'facebook',
      postId: '',
      content: '',
      mediaUrl: '',
      mediaType: 'image',
      postedAt: new Date().toISOString().split('T')[0],
    });
  };

  const platformIcons = {
    facebook: 'https://www.facebook.com/images/fb_icon_325x325.png',
    instagram: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png',
    twitter: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
    linkedin: 'https://www.linkedin.com/images/favicon.ico',
    youtube: 'https://www.youtube.com/s/desktop/7a2c4e38/img/favicon.ico',
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Social Posts</h1>
          <p className="text-slate-500 mt-1">Manage social media posts</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Post
        </button>
      </div>

      {loading ? (
        <TableSkeleton rows={5} />
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          <p className="text-slate-500">No social posts found</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-xl shadow-md overflow-hidden">
              {post.mediaUrl && (
                <div className="aspect-video bg-slate-100">
                  <img src={post.mediaUrl} alt="Post media" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <img src={platformIcons[post.platform]} alt={post.platform} className="w-5 h-5" />
                  <span className="text-sm font-medium text-slate-600 capitalize">{post.platform}</span>
                </div>
                <p className="text-slate-700 text-sm mb-3 line-clamp-3">{post.content}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.postedAt ? new Date(post.postedAt).toLocaleDateString() : 'N/A'}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="text-orange-500 hover:text-orange-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">
                  {editingPost ? 'Edit Post' : 'Add New Post'}
                </h2>
                <button onClick={resetForm} className="p-2 hover:bg-slate-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block mb-2 font-medium text-slate-700">Platform</label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                >
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="twitter">Twitter</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="youtube">YouTube</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-medium text-slate-700">Post ID</label>
                <input
                  type="text"
                  value={formData.postId}
                  onChange={(e) => setFormData({ ...formData, postId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-slate-700">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-slate-700">Media URL</label>
                <input
                  type="url"
                  value={formData.mediaUrl}
                  onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-slate-700">Media Type</label>
                <select
                  value={formData.mediaType}
                  onChange={(e) => setFormData({ ...formData, mediaType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="link">Link</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-medium text-slate-700">Posted Date</label>
                <input
                  type="date"
                  value={formData.postedAt}
                  onChange={(e) => setFormData({ ...formData, postedAt: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors"
                >
                  {editingPost ? 'Update Post' : 'Add Post'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-xl hover:bg-slate-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialPosts;

