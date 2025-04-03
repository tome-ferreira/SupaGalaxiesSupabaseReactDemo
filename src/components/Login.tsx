import { useState } from 'react';
import { supabase } from '../supabaseClient';

function Login() {
	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState('');

	const handleGoogleLogin = async () => {
		try {
			setLoading(true);
			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
			});

			if (error) {
				setMsg(error.message);
			}
		} catch (error: any) {
			setMsg(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<h1>Supabase + React = 🚀</h1>
			<p className="description">Sign in with Google below</p>
			{loading ? (
				'Redirecting to Google...'
			) : (
				<button className="button" onClick={handleGoogleLogin}>
					Sign in with Google
				</button>
			)}
			<p className="message">{msg}</p>
		</div>
	);
}

export default Login;
